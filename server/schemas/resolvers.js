const { AuthenticationError } = require("apollo-server-express");
const { User, Product } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({})
          .select("-__v -password")
          .populate("orders");

        return userData;
      }

      throw new AuthenticationError("You are not logged in");
    },
    users: async () => {
      return User.find()
      .select('-__v -password')
      .populate("orders");
    },
    user: async (parent, { _id }) => {
      return User.findById({ _id })
      .select("-__v -password")
      .populate("orders");
    },
    products: async () => {
      return Product.find()
    },
    product: async (parent, { _id }) => {
      return Product.findOne({ _id });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;

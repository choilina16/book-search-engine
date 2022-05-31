// HINT: look at the functionality in the user-controller.js as a guide

const { Book, User } = require('../models');

const resolvers = {
  // GET REQUEST
  Query: {
    // needs to be "me" because the readme wanted the typeDefs for query to be "me: User"
    // GET SINGLE USER
    me: async (parent, { _id }) => { 
      const params = _id ? { _id } : {};
      return User.find(params);
    }
  },

  // POST, PUT, DELETE REQUEST
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },

    login:

    // FIND ONE & UPDATE
    saveBook: async(parent, { _id, savedBook }) => {
      const book = await Book.findOneAndUpdate(
        {}
      )
    }
    deleteBook:
  },
};

module.exports = resolvers;

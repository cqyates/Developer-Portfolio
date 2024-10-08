const { User, Project } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password').populate("techStack").populate("projects");

        return userData;
      }

      throw AuthenticationError;
    },
    user: async () => {
      return await User.findOne({username: "CoreyQ"}).populate("techStack").populate("projects")
    },
    users: async () => {
      return await User.find()
    },
    projects: async () => {
      return await Project.find()
    }
     //tested succesfully from Apollo Server
    
  },
  Mutation: {
     //tested succesfully from Apollo Server
    login: async (parent, { email, password }) => {
   
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
     //when running test user from seed you need to comment out this line since the password isn't salted.
      const correctPw = await user.isCorrectPassword(password);
      
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    sendMessage: async (parent, {messageData}) => {
      const updatedUser = await User.findOneAndUpdate({username: "CoreyQ"},{$push: {messages: messageData}}, {new: true, runValidators: true})
      return updatedUser
    },
    sendRecommendation: async (parent, {recommendationData}) => {
      const updatedUser = await User.findOneAndUpdate({username: "CoreyQ"},{$push: {recommendations: recommendationData}}, {new: true, runValidators: true})
      return updatedUser
    },
    createAccount: async (parent, {email, username, password}) => {
      const newUser = await User.create({email, username, password, admin: true})
      const token = signToken(newUser);
      return { token, newUser };
    },
    removeRecommendation: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { recommendations: { _id } } },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;

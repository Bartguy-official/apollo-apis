const resolvers = {
  Query: {
    uploads(parent, args) {},
  },
  Mutation: {
    singleUpload(parent, args) {
      console.log(args);

      return args.file.then((file) => {
        console.log(file);
      });
    },
  },
};

const ho = {
  name: "hyunho",
  age: 20,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => ho,
  },
};

export default resolvers;

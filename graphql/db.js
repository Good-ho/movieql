export const people = [
  {
    id: "1",
    name: "hyunho",
    age: 20,
    gender: "male",
  },
  {
    id: "2",
    name: "naverho",
    age: 20,
    gender: "male",
  },
  {
    id: "3",
    name: "googleho",
    age: 20,
    gender: "male",
  },
];

export const getByid = (id) => {
  const filteredPeople = people.filter((person) => String(id) === person.id);
  return filteredPeople[0];
};

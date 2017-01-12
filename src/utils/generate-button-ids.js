import faker from 'faker';

const generateButtonIds = (numberOfButtons = 3) => {
  const ids = [];

  for (let i = 0; i < numberOfButtons; i += 1) {
    ids.push(faker.random.word());
  }

  return ids;
};

export default generateButtonIds;

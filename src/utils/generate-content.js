import faker from 'faker';

const generateContent = (numberOfButtons = 4) => {
  const contentWithTriggers = [];

  for (let i = 0; i < numberOfButtons; i += 1) {
    contentWithTriggers.push({
      triggerValue: faker.company.catchPhraseNoun(),
      content: faker.lorem.paragraphs(10),
      bgColor: faker.internet.color(),
    });
  }

  return contentWithTriggers;
};

export default generateContent;

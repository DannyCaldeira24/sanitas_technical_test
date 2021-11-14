import faker from 'faker';

faker.locale = 'es';

export default {
    getLoremParagraph: () => faker.lorem.paragraph()
    // getLoremParagraphs: () => faker.lorem.paragraphs(),
}
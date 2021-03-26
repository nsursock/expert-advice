import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  title() {
    return faker.lorem.sentence();
  },

  description() {
    return faker.lorem.paragraph();
  },

  publishedAt() {
    return faker.date.past();
  },

  views() {
    return Math.round(Math.random() * 2000);
  },

  authorId() {
    return faker.internet.email();
  },

  afterCreate(question, server) {
    server.createList("tag", Math.floor(Math.random() * 5), { question });
    server.createList("answer", Math.floor(Math.random() * 10), { question });
  },
});

import Model, { attr, belongsTo } from "@ember-data/model";

export default class AnswerModel extends Model {
  @attr text;
  @attr("date") publishedAt;
  @belongsTo question;
}

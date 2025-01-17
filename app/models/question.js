import Model, { attr, hasMany } from "@ember-data/model";

export default class QuestionModel extends Model {
  @attr("string") title;
  @attr("string") description;
  @attr("date") publishedAt;
  @attr("number") views;
  @hasMany("tag") tags;
  @hasMany("answer") answers; //, { async: false }
  @attr("string") authorId;

  get formattedPublishedAt() {
    return this.publishedAt.toLocaleString("en-US", { timeZone: "UTC" });
  }
}

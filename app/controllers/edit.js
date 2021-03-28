import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class QuestionController extends Controller {
  @tracked title = "";
  @tracked description = "";
  @tracked tags = "";

  @action
  async validateTitle() {
    if (this.title.length === 0) alert("Title can't be empty");
  }

  @action
  async validateDescription() {
    if (this.description.length === 0) alert("Description can't be empty");
  }

  @action
  update(question) {
    question.title = this.title;
    question.description = this.description;

    let tags = this.tags.split(",");
    tags.forEach((item) => {
      item = this.store.createRecord("tag", { name: item });
      item.question = question;
      item.save();
    });

    question.save();
  }
}

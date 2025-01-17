import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class QuestionController extends Controller {
  @tracked title = "";
  @tracked description = "";
  @tracked tags = "";
  @service session;

  get disableSubmit() {
    return !(this.title !== "" && this.description !== "");
  }

  @action
  async validateTitle() {
    if (this.title.length === 0) alert("Title can't be empty");
  }

  @action
  async validateDescription() {
    if (this.description.length === 0) alert("Description can't be empty");
  }

  @action
  saveQuestion() {
    const question = this.store.createRecord("question", {
      title: this.title,
      description: this.description,
      publishedAt: new Date(),
      authorId: this.session.user.email,
      question: this.model,
    });

    let tags = this.tags.split(",");
    tags.forEach((item) => {
      item = this.store.createRecord("tag", { name: item });
      item.question = question;
      item.save();
    });
    question.save();

    this.title = "";
    this.description = "";
    this.tags = "";
  }
}

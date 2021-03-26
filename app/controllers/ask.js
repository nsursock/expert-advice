import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service";

export default class QuestionController extends Controller {
  @tracked title = "";
  @tracked description = "";
  @tracked tags = "";
  @service session;

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
      // tags: this.tags,
      publishedAt: new Date(),
      authorId: this.session.user.email,
      question: this.model,
    });
    question.save();
    this.title = "";
    this.description = "";
    this.tags = "";
  }
}

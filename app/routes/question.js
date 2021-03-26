import Route from "@ember/routing/route";

export default class QuestionRoute extends Route {
  model(params) {
    return this.store.findRecord("question", params.question_id, {
      include: ["tags", "answers"],
    });
  }
}

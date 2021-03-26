import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class IndexController extends Controller {
  queryParams = ["pageOffset", "pageSize"];
  @tracked pageOffset = null;
  @tracked pageSize = null;
  @tracked model;
  @tracked search;
  @service session;

  get offset() {
    return parseInt(this.pageOffset) - 1;
  }

  get size() {
    return parseInt(this.pageSize);
  }

  get questions() {
    let offset = this.offset;
    let size = this.size;
    let questions = this.model
      .filter((question) =>
        this.search !== undefined ? question.title.includes(this.search) : true
      )
      .sortBy("publishedAt")
      .reverse();
    return questions;
  }

  get numPages() {
    let numPages = Math.floor(this.questions.length / this.pageSize);
    numPages += this.questions.length % this.pageSize === 0 ? 0 : 1;
    return numPages;
  }

  get arrangedQuestions() {
    const start = this.size * this.offset;
    const end = start + this.size;
    const page = this.questions.slice(start, end);
    return page;
  }

  get pagesArray() {
    let array = [];
    for (var i = 1; i <= this.numPages; i++) {
      array.push(i);
    }
    return array;
  }
}

import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service session;

  beforeModel(transition) {
    // this.transitionTo("/?pageOffset=1&pageSize=5");
    // this.transitionTo({ queryParams: { pageOffset: 1, pageSize: 5 } });
    //this.session.requireAuthentication(transition, "login");
    return this.session.loadUser();
  }

  model() {
    return this.store.findAll("question");
  }
}

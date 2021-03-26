import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route("login");
  this.route("signup");
  this.route("index", { path: "" }, function () {});
  this.route("ask", { path: "/ask" });
  this.route("questions", { path: "/questions/:question_id" });
});

export default Router;

import ENV from "ember-test-assignment/config/environment";
import { Response } from "miragejs";

export default function () {
  this.logging = true;
  this.timing = 0;

  this.urlPrefix = ENV.serverURL;

  this.post("/oauth/token", function () {
    const { username, password } = this.normalizedRequestAttrs();

    if (username === "test@test.com" && password === "test") {
      return new Response(
        200,
        {},
        {
          access_token:
            "1b1234074a7a5e4868c96ce2e32b8a4a6aa3a7e929ef2f33e38b08f8f057961e",
          created_at: 1597285088,
          expires_in: 7200,
          refresh_token:
            "c0ff9573874e236d7e74c1adb3e2668329f2b84aba1aa5a67528799fc2634761",
          token_type: "Bearer",
        }
      );
    }

    return new Response(401);
  });

  this.namespace = "/api/v1";

  this.get("/users/me", function (schema, request) {
    if (request.requestHeaders.Authorization) {
      return schema.users.first();
    }
    return new Response(401);
  });

  this.get("/questions");
  this.get("/questions/:id");
  this.post("/questions");

  // this.post("/questions", (schema, request) => {
  //   var params = JSON.parse(request.requestBody);
  //   const { title, description } = params.data.attributes;
  //   if (title === "" || description === "")
  //     return new Response(
  //       422,
  //       {},
  //       {
  //         errors: [
  //           {
  //             status: 422,
  //             title: "title or description invalid",
  //             description: "title and description cannot be blank",
  //           },
  //         ],
  //       }
  //     );
  //   return new Response(
  //     200,
  //     {},
  //     {
  //       data: {
  //         attributes: {
  //           "author-id": params["author-id"],
  //           description: description,
  //           "published-at": params["published-at"],
  //           title: title,
  //           views: 0,
  //         },
  //         type: "questions",
  //       },
  //     }
  //   );
  // });

  this.patch("/questions/:id");
  this.delete("/questions/:id");

  // this.get("/questions", (schema, request) => {
  //   // const {
  //   //   queryParams: { pageOffset, pageSize },
  //   // } = request;
  //
  //   const questions = schema.db.questions;
  //   console.log(questions);
  //   return { data: questions };
  // });
}

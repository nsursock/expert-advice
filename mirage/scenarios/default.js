export default function (server) {
  server.create("user", { email: "test@test.com" });
  server.createList("question", 100);
}

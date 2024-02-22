import "../../../dist";

beforeEach(() => {
  cy.task("getSchema").then((schema) => {
    cy.mockGraphql({
      schema,
      mocks: {
        EnumField: () => "CAT",
        User: () => ({
          name: "Test User",
        }),
        DateTime() {
          return new Date("2019-01-01");
        },
      },
    });
  });
});

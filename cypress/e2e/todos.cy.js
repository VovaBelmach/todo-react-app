describe("create todo spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should create a todo", () => {
    cy.get('input[name="todo-input"]').type("First Todo");
    cy.get("form").submit();

    cy.contains("First Todo").should("exist");
  });

  it("shouldn't create a empty todo", () => {
    cy.get('input[name="todo-input"]').type("{enter}");

    cy.contains(
      "Oops! You cannot create an empty todo. Please provide 'What should be done?' in the section above."
    ).should("exist");
    cy.get('[role="todo-item"]').should("have.length", 0);
  });

  it("should mark todo", () => {
    cy.get('input[name="todo-input"]').type("First Todo{enter}");

    cy.get('input[type="checkbox"]').eq(1).click();
  });

  it("should delete a todo", () => {
    cy.get('input[name="todo-input"]').type("First Todo{enter}");

    cy.get("button").eq(0).click({ force: true });

    cy.contains(
      "All todos completed! Add a todo and it will be displayed here."
    ).should("exist");
    cy.contains("All done!").should("exist");
  });

  it("should filter between all, complete and incomplete todos", () => {
    cy.get('input[name="todo-input"]').type("Sprint meeting{enter}");
    cy.get('input[name="todo-input"]').type("Code{enter}");
    cy.get('input[name="todo-input"]').type("Read{enter}");
    cy.get('input[name="todo-input"]').type("Eat{enter}");
    cy.get('input[name="todo-input"]').type("Exercising{enter}");
    cy.get('input[name="todo-input"]').type("Code{enter}");

    // mark some as complete
    cy.get('input[type="checkbox"]').eq(2).click();
    cy.get('input[type="checkbox"]').eq(4).click();
    cy.get('input[type="checkbox"]').eq(6).click();

    // filter complete only
    cy.get('button[value="Active"]').click();

    // check if only complete exists
    cy.get(".complete").should("not.exist");
    cy.get(".incomplete").should("exist");
    cy.contains("3 todo left").should("exist");

    // filter incomplete only
    cy.get('button[value="Completed"]').click();
    cy.get(".complete").should("exist");
    cy.get(".incomplete").should("not.exist");
    cy.contains("All done!").should("exist");

    // filter all
    cy.get('button[value="All"]').click();
    cy.get(".complete").should("exist");
    cy.get(".incomplete").should("exist");
    cy.contains("3 todo left").should("exist");
  });

  it("should delete all completed todos", () => {
    cy.get('input[name="todo-input"]').type("Sprint meeting{enter}");
    cy.get('input[name="todo-input"]').type("Code{enter}");
    cy.get('input[name="todo-input"]').type("Read{enter}");
    cy.get('input[name="todo-input"]').type("Eat{enter}");
    cy.get('input[name="todo-input"]').type("Exercising{enter}");
    cy.get('input[name="todo-input"]').type("Code{enter}");

    // mark some as complete
    cy.get('input[type="checkbox"]').eq(2).click();
    cy.get('input[type="checkbox"]').eq(4).click();
    cy.get('input[type="checkbox"]').eq(6).click();

    // click Clear completed button
    cy.get('button[value="Clear completed"]').click();

    // check if only complete exists
    cy.get(".complete").should("not.exist");
    cy.get(".incomplete").should("exist");
    cy.contains("3 todo left").should("exist");
  });

  it("should reorder list todos", () => {
    const dataTransfer = new DataTransfer();

    cy.get('input[name="todo-input"]').type("Item 1{enter}");
    cy.get('input[name="todo-input"]').type("Item 2{enter}");
    cy.get('input[name="todo-input"]').type("Item 3{enter}");

    cy.get("li[draggable=true]").first().trigger("dragstart", { dataTransfer });

    cy.get("li[draggable=true]").eq(1).trigger("drop", { dataTransfer });

    cy.get("li[draggable=true]").first().trigger("dragend");

    cy.get('[role="todo-item"]')
      .should("have.length", 3)
      .then(($items) => {
        expect($items.eq(0)).to.contain("Item 2");
        expect($items.eq(1)).to.contain("Item 1");
        expect($items.eq(2)).to.contain("Item 3");
      });
  });
});

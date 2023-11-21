const express = require("express");
const router = express.Router();

class CategoriesRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getCategories.bind(this.controller));
    router.post(
      "/sightingCategory",
      this.controller.addCategoryToSighting.bind(this.controller)
    );
    router.post(
      "/sightingCategory2",
      this.controller.addCategoryToSighting2.bind(this.controller)
    );
    router.post("/", this.controller.addOne.bind(this.controller));
    router.get(
      "/sightings",
      this.controller.getSightingCategories.bind(this.controller)
    );
    return router;
  }
}

module.exports = CategoriesRouter;

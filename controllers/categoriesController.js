const BaseController = require("./baseController");

class CategoriesController extends BaseController {
  constructor(db) {
    super(db);
  }

  async getCategories(req, res) {
    try {
      const output = await this.db.categories.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addOne(req, res) {
    const { name } = req.body;

    try {
      const newCategory = await this.db.categories.create({
        name: name,
      });
      return res.json(newCategory);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getSightingCategories(req, res) {
    try {
      const output = await this.db.sightingCategories.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addCategoryToSighting(req, res) {
    const { category_id, sighting_id } = req.body;
    try {
      const sighting = await this.db.sightings.findByPk(sighting_id);
      const category = await this.db.categories.findByPk(category_id);
      sighting.addCategory(category);
      return res.json(sighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // async addCategoryToSighting(req, res) {
  //   const { category_id } = req.body;
  //   const { sightingId } = req.params;
  //   try {
  //     const newSightingCategory = await this.db.sightingCategories.create({
  //       sighting_id: sightingId,
  //       category_id: category_id,
  //     });
  //     return res.json(newSightingCategory);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  async addCategoryToSighting2(req, res) {
    const { sighting_id, categories } = req.body;
    try {
      console.log(sighting_id, categories);
      const newSightingCategory = await this.db.sighting_categories.create({
        sighting_id: sighting_id,
        category_id: categories,
      });
      return res.json(newSightingCategory);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // async addCategoryToSighting2(req, res) {
  //   const { sighting_id, categories } = req.body;
  //   try {
  //     const sightingCategories = [];
  //     for (let category of categories) {
  //       const newSightingCategory = await this.db.sighting_categories.create({
  //         sighting_id: sighting_id,
  //         category_id: category,
  //       });
  //       sightingCategories.push(newSightingCategory);
  //     }
  //     return res.json(sightingCategories);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }
}

module.exports = CategoriesController;

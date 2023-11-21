const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(db) {
    super(db);
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { sightingId } = req.params;
    try {
      const sighting = await this.db.sightings.findByPk(sightingId, {
        include: [{ model: this.db.categories }],
      });
      return res.json(sighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addOne(req, res) {
    const { date, location, notes, categories } = req.body;

    try {
      const newSighting = await this.db.sightings.create({
        date: date,
        location: location,
        notes: notes,
      });
      for (let category_id of categories) {
        const category = await this.db.categories.findByPk(category_id);
        newSighting.addCategory(category);
      }
      return res.json(newSighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
  // async addOne(req, res) {
  //   const { date, location, notes } = req.body;

  //   try {
  //     const newSighting = await this.db.sightings.create({
  //       date: date,
  //       location: location,
  //       notes: notes,
  //     });
  //     return res.json(newSighting);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // }

  async getComments(req, res) {
    const { sightingId } = req.params;
    try {
      const comments = await this.db.comments.findAll({
        where: {
          sighting_id: sightingId,
        },
      });
      return res.json(comments);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async addComment(req, res) {
    const { date, content } = req.body;
    const { sightingId } = req.params;
    try {
      const newComment = await this.db.comments.create({
        date: date,
        content: content,
        sighting_id: sightingId,
      });
      return res.json(newComment);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = SightingsController;

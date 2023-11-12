class BaseController {
  constructor(db) {
    this.db = db;
  }
  // constructor(model) {
  //   this.model = model;
  // }

  /* All controllers that extend this BASE controller will have access to the below function **/

  async getAll(req, res) {
    try {
      const output = await this.db.sightings.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = BaseController;

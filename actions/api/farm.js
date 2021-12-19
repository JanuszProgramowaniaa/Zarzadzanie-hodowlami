const Farm = require("../../models/farm");

class FarmActions {
  async getFarm(req, res) {
    const UserId = req.params.UserId;
    const farm = await Farm.find({ UserId: UserId });

    res.status(200).json(farm);
  }
  async saveFarm(req, res) {
    const Name = req.body.Name;
    const Description = req.body.Description;
    const UserId = req.body.UserId;
    const ImageUrl = req.file.filename;
    let farm;
    try {
      farm = new Farm({ Name, ImageUrl, Description, UserId });
      await farm.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(200).json(farm);
  }

  async updateFarm(req, res) {
    const findFarmId = req.params.FarmId;
    const Name = req.body.Name;
    const ImageUrl = req.body.ImageUrl;
    const Description = req.body.Description;

    const farm = await Farm.findOne({ FarmId: findFarmId });

    farm.Name = Name;
    farm.ImageUrl = ImageUrl;
    farm.Description = Description;

    await farm.save();

    res.status(201).json(farm);
  }

  async deleteFarm(req, res) {
    const FarmId = req.params.FarmId;
    await Farm.deleteOne({ FarmId: FarmId });

    res.sendStatus(204);
  }
}

module.exports = new FarmActions();

const Unit = require("../../models/Unit");
class UnitActions {
  async getUnit(req, res) {
    const FarmId = req.params.FarmId;
    const unit = await Unit.find({ FarmId: FarmId });

    res.status(200).json(unit);
  }

  async saveUnit(req, res) {
    const Matka = req.body.Matka;
    const Ojciec = req.body.Ojciec;
    const Wiek = req.body.Wiek;
    const Data_Urodzenia = req.body.Data_Urodzenia;
    const FarmId = req.body.FarmId;
    let unit;
    try {
      unit = new Unit({ Matka, Ojciec, Wiek, Data_Urodzenia, FarmId });
      await unit.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(200).json(unit);
  }

  async updateUnit(req, res) {
    const Matka = req.body.Matka;
    const findUnitId = req.params.UnitId;
    const Ojciec = req.body.Ojciec;
    const Wiek = req.body.Wiek;
    const Data_Urodzenia = req.body.Data_Urodzenia;

    const unit = await Unit.findOne({ UnitId: findUnitId });
    unit.Matka = Matka;
    unit.Ojciec = Ojciec;
    unit.Wiek = Wiek;
    unit.Data_Urodzenia = Data_Urodzenia;

    await unit.save();

    res.status(201).json(unit);
  }

  async deleteUnit(req, res) {
    const UnitId = req.params.UnitId;
    await Unit.deleteOne({ UnitId: UnitId });

    res.sendStatus(204);
  }
}

module.exports = new UnitActions();

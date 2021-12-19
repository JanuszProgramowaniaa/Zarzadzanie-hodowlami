const express = require("express");
const router = express.Router();

const upload = require("../service/multer");

const userActions = require("../actions/api/user");

const farmActions = require("../actions/api/farm");
const unitActions = require("../actions/api/unit");

router.get("/users", userActions.getAllUsers);
router.get("/user/:Login", userActions.getUser);
router.post("/user", userActions.saveUser);
router.put("/user/:Login", userActions.updateUser);
router.delete("/user/:Login", userActions.deleteUser);

router.get("/farm/:UserId", farmActions.getFarm);
router.post("/farm", upload.single("image"), farmActions.saveFarm);
router.put("/farm/:FarmId", farmActions.updateFarm);
router.delete("/farm/:FarmId", farmActions.deleteFarm);

router.get("/unit/:FarmId", unitActions.getUnit);
router.post("/unit", unitActions.saveUnit);
router.put("/unit/:UnitId", unitActions.updateUnit);
router.delete("/unit/:UnitId", unitActions.deleteUnit);

module.exports = router;

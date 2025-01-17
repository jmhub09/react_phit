const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/user/:email").get(userController.findUser);

router.route("/push").put(userController.pushWorkOut);

router.route("/user").post(userController.createUser);

router
  .route("/week/:week&:type&:name&:user")
  .get(userController.findWorkOutsByWeek);

router
  .route("/month/:month&:type&:name&:user")
  .get(userController.findWorkOutsByMonth);

router.route("/settings").put(userController.updateSettings);

router.route("/workouts/:id").get(userController.findUserWorkOuts);

router.route("/upload").put(userController.uploadPicture);

router
  .route("/profile/:username")
  .get(userController.findProfile)
  .put(userController.updateProfileAbout);

module.exports = router;

const express = require("express");
const {
  getHomepage,
  getMain,
  getNavbar,
  getSubmitUser,
  getCreate,
  getUpdate,
  getUpdateUser,
  getDelete,
} = require("../controllers/homeControlleer");
const router = express.Router();

router.get("/", getMain);
router.get("/abc", getHomepage);
router.get("/navbar", getNavbar);
router.post("/submit-user", getSubmitUser);
router.get("/create", getCreate);
router.get("/update/:id", getUpdate);
router.get("/delete/:id", getDelete);
router.post("/update-user", getUpdateUser);

module.exports = router;

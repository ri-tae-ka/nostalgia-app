const express = require("express");
const {
  getAllResponses,
  createResponse,
  updateResponse,
  deleteResponse,
  getSingleResponse,
} = require("../controllers/responseController");

const router = express.Router();

router.route("/responses").get(getAllResponses);
router.route("/response/new").post(createResponse);
router.route("/response/:id").put(updateResponse);
router.route("/response/:id").delete(deleteResponse);
router.route("/response/:id").get(getSingleResponse);

module.exports = router;

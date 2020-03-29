const { Router } = require("express");
const router = Router();

const {
  getClient,
  createClient,
  deleteClient,
  checkClient
} = require("../controllers/client");

router
  .route("/")
  .get(getClient)
  .post(createClient);

router
  .route("/:id")
  .put(checkClient)
  .delete(deleteClient);

module.exports = router;

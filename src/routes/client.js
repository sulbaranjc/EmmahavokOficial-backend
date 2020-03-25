const { Router } = require("express");
const router = Router();

const {
  getClient,
  createClient,
  deleteClient
} = require("../controllers/client");

router
  .route("/")
  .get(getClient)
  .post(createClient);

router.route("/:id").delete(deleteClient);

module.exports = router;

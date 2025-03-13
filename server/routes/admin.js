const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

router.route("/admin/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

module.exports = router;

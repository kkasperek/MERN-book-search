const router = require("express").Router();
const bookRoutes = require("./bookRoutes");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;


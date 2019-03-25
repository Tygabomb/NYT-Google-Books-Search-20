const path = require("path");
const router = require("express").Router();
const APIRoutes = require("./api");

// Enable router to use API Routes
router.use("/api", APIRoutes);

// Fallback route if no API routes are hit
router.use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;
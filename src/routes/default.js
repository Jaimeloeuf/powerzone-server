/**
 * Express Router for default routes like Homepage and health-check
 * @author JJ
 * @module Default routes
 */

/**
 * express module and express router to mount user related functions on
 * @const
 * @ignore
 */
const express = require("express");
const router = express.Router();

/**
 * Returns a welcome string
 * @name GET /
 * @returns {String} welcome string
 *
 * @example
 * // Set auth headers
 * fetch("/")
 * -> "Welcome to torus backend"
 */
router.get("/", (req, res) => {
  res.send("Welcome to Powerzone API server");
});

/**
 * Server health check
 * @name GET /health
 * @returns {Status} 200
 *
 * @example
 * // Set auth headers
 * fetch("/health")
 * -> "200"
 */
router.get("/health", (req, res) => {
  res.sendStatus("200");
});

module.exports = router;

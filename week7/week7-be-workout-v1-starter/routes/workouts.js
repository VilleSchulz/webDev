const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Workouts
 *   description: API endpoints for managing workouts
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the workout
 *         reps:
 *           type: integer
 *           description: The number of repetitions
 *         load:
 *           type: integer
 *           description: The load or weight in kilograms
 *       required:
 *         - title
 *         - reps
 *         - load
 *       example:
 *         title: Push ups
 *         reps: 40
 *         load: 10
 */

// GET all workouts
/**
 * @swagger
 * /workouts:
 *   get:
 *     summary: Retrieve all workouts
 *     tags: [Workouts]
 *     responses:
 *       200:
 *         description: An array of workouts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Workout'
 *       500:
 *         description: Internal server error
 */
router.get("/", getWorkouts);

// GET a single workout by ID
/**
 * @swagger
 * /workouts/{id}:
 *   get:
 *     summary: Retrieve a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the workout
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single workout
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Workout'
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getWorkout);

// POST a new workout
/**
 * @swagger
 * /workouts:
 *   post:
 *     summary: Create a new workout
 *     tags: [Workouts]
 *     requestBody:
 *       description: Workout object to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       201:
 *         description: Workout created successfully
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */
router.post("/", createWorkout);

// DELETE a workout
/**
 * @swagger
 * /workouts/{id}:
 *   delete:
 *     summary: Delete a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the workout to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Workout deleted successfully
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteWorkout);

// UPDATE a workout
/**
 * @swagger
 * /workouts/{id}:
 *   patch:
 *     summary: Update a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the workout to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated workout object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       200:
 *         description: Workout updated successfully
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id", updateWorkout);

module.exports = router;

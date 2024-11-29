const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app.js");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel.js");
const workouts = require("./data/workouts.js");

let token = null;
describe("Single Workout API tests", () => {
  beforeAll(async () => {
    await User.deleteMany({});
    const result = await api
      .post("/api/user/signup")
      .send({ email: "ville@gmail.com", password: "123!!lsdlA" });
    token = result.body.token;
  });

  beforeEach(async () => {
    await Workout.deleteMany({});
    await api.post("/api/workouts")
      .set("Authorization", "Bearer " + token)
      .send(workouts[0]).expect(201);
  });

  describe("GET /api/workouts", () => {
    test("Workouts are returned as json and status 200", async () => {
      await api.get("/api/workouts")
        .set("Authorization", "Bearer " + token)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  describe("PATCH /api/workouts/:id", () => {
    test("Workout updated successfully", async () => {
      const workout = await Workout.findOne();
      const updatedWorkout = { reps: 103, load: 10 };
      await api.patch(`/api/workouts/${workout._id}`)
        .set("Authorization", "Bearer " + token)
        .send(updatedWorkout)
        .expect(200);
    });
  });

  describe("DELETE /api/workouts/:id", () => {
    test("Workout deleted successfully", async () => {
      const workout = await Workout.findOne();
      await api.delete(`/api/workouts/${workout._id}`)
        .set("Authorization", "Bearer " + token)
        .expect(200);
    });
  });

  afterAll(() => {
    mongoose.connection.close();
  });
});
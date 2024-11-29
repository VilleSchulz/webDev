const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app.js");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;
describe("Workout API tests", () => {
  describe("clear accounts from datasbase and make a fresh one before tests", () => {
    beforeAll(async () => {
      await User.deleteMany({});
      const result = await api
        .post("/api/user/signup")
        .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
      token = result.body.token;
    });
 

  describe("clear Workouts from database before tests and create initial ones", () => {
    beforeEach(async () => {
      await Workout.deleteMany({});
      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(workouts[0])
        .send(workouts[1]);
    });


    describe("GET /api/workouts", () => {
      test("Workouts are returned as json", async () => {
        await api
          .get("/api/workouts")
          .set("Authorization", "bearer " + token)
          .expect(200)
          .expect("Content-Type", /application\/json/);
      });
    });


    describe("POST /api/workouts", () => {
      test("New workout added successfully", async () => {
        const newWorkout = {
          title: "testworkout",
          reps: 10,
          load: 100,
        };
        await api
          .post("/api/workouts")
          .set("Authorization", "bearer " + token)
          .send(newWorkout)
          .expect(201);
      });
    });
  });

  afterAll(() => {
    mongoose.connection.close();
  });
});
});
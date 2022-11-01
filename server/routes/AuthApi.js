import { Router } from "express";
// import Transaction from "../models/Transaction";

const router = Router();

router.post("/register", async (req, res) => {
  // get all form data
  //check if user exists
  // hash the password
  //   store user

  //   const { firstName, lastName, email, password } = req.body;
  res.json({ message: "user is created" });
});

export default router;

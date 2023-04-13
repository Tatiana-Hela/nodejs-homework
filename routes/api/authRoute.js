const express = require("express");
const ctrl = require("../../controllers/auth/authController");
const { userJoiSchema } = require("../../models/users");
const { validateBody } = require("../../utils");
const authRouter = express.Router();

authRouter.post("/register", validateBody(userJoiSchema), ctrl.register);

authRouter.post("/login", validateBody(userJoiSchema),ctrl.login)

module.exports = authRouter;

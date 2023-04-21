const express = require("express");
const { auth: ctrl } = require("../../controllers");
const { userJoiSchema } = require("../../models");
const { validateBody } = require("../../utils");

const authRouter = express.Router();

const { authenticate, upload } = require("../../middlewares");

authRouter.post("/register", validateBody(userJoiSchema), ctrl.register);

authRouter.post("/login", validateBody(userJoiSchema), ctrl.login);

authRouter.get("/current", authenticate, ctrl.getCurrentUser);

authRouter.post("/logout", authenticate, ctrl.logout);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = authRouter;

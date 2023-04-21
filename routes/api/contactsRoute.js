const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const contactsRouter = express.Router();
const { validateBody } = require("../../utils");
const { addSchema, statusSchema } = require("../../models");

const { isValidId, authenticate } = require("../../middlewares");

contactsRouter.get("/", authenticate, ctrl.getAllContacts);

contactsRouter.get("/:id", authenticate, isValidId, ctrl.getContactById);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(addSchema),
  ctrl.addContact
);

contactsRouter.delete("/:id", authenticate, isValidId, ctrl.removeContactById);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(addSchema),
  ctrl.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(statusSchema),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;

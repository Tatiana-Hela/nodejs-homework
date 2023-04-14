const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const contactsRouter = express.Router();
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/contact");

const { isValidId, authenticate } = require("../../middlewares");

contactsRouter.get("/", authenticate, ctrl.getAllContacts);

contactsRouter.get("/:id", authenticate, isValidId, ctrl.getContactById);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

contactsRouter.delete("/:id", authenticate, isValidId, ctrl.removeContactById);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.statusSchema),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;

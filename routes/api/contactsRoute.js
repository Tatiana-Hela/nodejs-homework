const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const contactsRouter = express.Router();
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/contact");

const { isValidId } = require("../../middlewares");

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", isValidId, ctrl.getContactById);

contactsRouter.post("/", validateBody(schemas.addSchema), ctrl.addContact);

contactsRouter.delete("/:id", isValidId, ctrl.removeContactById);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.statusSchema),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;

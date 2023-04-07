const express = require("express");
const ctrl = require("../../controllers/contactsControllers");
const router = express.Router();
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/contact");

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", ctrl.removeContactById);

router.put("/:id", validateBody(schemas.addSchema), ctrl.updateContact);

router.patch(
  "/:id/favorite",
  validateBody(schemas.statusSchema),
  ctrl.updateStatusContact
);

module.exports = router;

const express = require("express");
const ctrl = require("../../controllers/contactsControllers");
const router = express.Router();
const { validateBody } = require("../../utils");
const schemas = require("../../schemas");

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", ctrl.removeContactById);

router.put("/:id", validateBody(schemas.addSchema), ctrl.updateContact);

module.exports = router;

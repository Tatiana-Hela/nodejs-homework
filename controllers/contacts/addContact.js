const { Contact } = require("../../models");

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create(
    { ...req.body, owner },
    "-createdAt -updatedAt"
  );
  res.status(201, "Сontact added successfully").json(result);
};

module.exports = addContact;

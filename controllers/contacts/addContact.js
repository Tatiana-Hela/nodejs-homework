const { Contact } = require("../../models/contact");

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201, "Сontact added successfully").json(result);
};

module.exports = addContact;

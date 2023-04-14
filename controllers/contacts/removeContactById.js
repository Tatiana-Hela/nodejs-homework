const { Contact } = require("../../models");

const { HttpError } = require("../../helpers");

const removeContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Contact with this ${id} not found`);
  }
  res.json({ message: "Contact deleted" });
};

module.exports = removeContactById;

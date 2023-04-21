const { Contact } = require("../../models");

const { HttpError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id, "-createdAt -updatedAt").populate(
    "owner",
    "email subscription"
  );
  if (!result) {
    throw HttpError(404, `Contact with this id: ${id} not found`);
  }
  res.json(result);
};
module.exports = getContactById;

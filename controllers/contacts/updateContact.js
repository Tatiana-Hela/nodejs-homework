const { Contact } = require("../../models");

const { HttpError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  })
    .populate("owner", "email subscription")
    .select("-createdAt -updatedAt");
  if (!result) {
    throw HttpError(404, `Contact with this ${id} not found`);
  }
  res.json(result);
};

module.exports = updateContact;

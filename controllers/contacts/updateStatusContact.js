const { Contact } = require("../../models");

const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  )
    .populate("owner", "email subscription")
    .select("-createdAt -updatedAt");
  if (!result) {
    throw HttpError(404, "Missing field favorite");
  }
  res.json(result);
};

module.exports = updateStatusContact;

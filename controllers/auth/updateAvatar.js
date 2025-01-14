const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  if (!req.file) {
    throw HttpError(400, "Please upload an avatar");
  }
  const { _id } = req.user;
  const { path: tmpUpload, filename } = req.file;
  const avatarName = `${_id}_${filename}`;
  const resultUpload = path.join(avatarsDir, avatarName);
  await fs.rename(tmpUpload, resultUpload);
  const avatarURL = path.join("avatars", avatarName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  const avatarImage = await Jimp.read(resultUpload);
  await avatarImage.resize(250, 250).write(resultUpload);

  res.json({ avatarURL });
};

module.exports = updateAvatar;

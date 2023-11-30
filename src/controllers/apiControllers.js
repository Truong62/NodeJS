const User = require("../models/user");

const {
  Uploadsingfile,
  uploadmultipleFiles,
} = require("../services/fileService");

const getUsersAPI = async (req, res) => {
  let results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const postCreateUsersAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(email, "    ", name, "    ", city);
  let user = await User.create({
    email: email,
    name: name,
    city: city,
  });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const putUpdateUserAPI = async (req, res) => {
  let id = req.body.id;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let user = await User.updateOne(
    { _id: id },
    { name: name, email: email, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const deleteUser = async (req, res) => {
  let id = req.body.userId;
  console.log(req.body);
  console.log(id);
  let user = await User.deleteOne({ _id: id });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const postUpsimgleFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let resquire = await Uploadsingfile(req.files.image);
  console.log(resquire);
  return res.send("ok");
};

const postMultipleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  if (Array.isArray(req.files.image)) {
    let result = await uploadmultipleFiles(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } else {
    return await postUpsimgleFile(req, res);
  }
};

module.exports = {
  getUsersAPI,
  postCreateUsersAPI,
  putUpdateUserAPI,
  deleteUser,
  postUpsimgleFile,
  postMultipleFileAPI,
};

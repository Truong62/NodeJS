// const configDB = require("../config/database");

// configDB();

const getAllUser = async () => {
  let [results, fields] = await configDB.query("select * FROM `User`");
  return results;
};
const getUserById = async (userId) => {
  let [results, fields] = await configDB.query(
    "select * FROM `User` where id = ?",
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};

  return user;
};

const updateUserById = async (email, name, city, id) => {
  let [results, fields] = await configDB.query(
    "UPDATE User SET email = ?, name = ?, city = ? WHERE id = ?;",
    [email, name, city, id]
  );
};
const DeleteUserById = async (id) => {
  let [results, fields] = await configDB.query(
    "DELETE FROM User WHERE id = ?;",
    [id]
  );
};
module.exports = { getAllUser, getUserById, updateUserById, DeleteUserById };

const path = require("path");
const Uploadsingfile = async (fileObj) => {
  // let uploadPath = __dirname + fileObj.name;
  let uploadPath = path.resolve(__dirname, "../public/images/upload");

  let extName = path.extname(fileObj.name);
  // console.log(extName);
  // let baseName = path.basename(fileObj.name, extName);

  let finalName = `${Date.now()}${extName}`;
  // console.log(finalName);

  let finalPath = `${uploadPath}/${finalName}`;
  // console.log(finalPath);

  try {
    await fileObj.mv(finalPath);
    return {
      status: "success",
      path: finalName,
      rerror: null,
    };
  } catch (err) {
    return {
      status: "success",
      path: null,
      rerror: JSON.stringify(err),
    };
  }
};

const uploadmultipleFiles = async (filesArr) => {
  try {
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    let resultArr = [];
    let countSuccess = 0;

    for (let i = 0; i < filesArr.length; i++) {
      let extName = path.extname(filesArr[i].name);
      let finalName = `${Date.now()}${extName}`;
      let finalPath = `${uploadPath}/${finalName}`;

      try {
        await filesArr[i].mv(finalPath);
        resultArr.push({
          status: "success",
          path: finalName,
          finalName: filesArr[i].name,
          rerror: null,
        });
        countSuccess++;
      } catch (err) {
        resultArr.push({
          status: "success",
          path: null,
          finalName: filesArr[i].name,
          rerror: JSON.stringify(err),
        });
      }
    }
    return {
      countSuccess: countSuccess,
      detail: resultArr,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  Uploadsingfile,
  uploadmultipleFiles,
};

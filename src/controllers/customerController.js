const aqp = require("api-query-params");
const Joi = require("joi")

const {
  Uploadsingfile,
  uploadmultipleFiles,
} = require("../services/fileService");

const {
  createCustomer,
  createCustomerArr,
  getAllCustomer,
  UpdateCustomer,
  DeleteCustomer,
  deleteArrCustomerSv,
} = require("../services/customerService");

module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;

    const schema = Joi.object({
      name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      address: Joi.string(),
      phone: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      email: Joi.string()
        .email(),
      description: Joi.string(),
    })
    let Error = schema.validate(req.body)
    let imgUrl = "";
    if (Error) {
      return res.status(200).json({
        msg: Error
      })

    } else {

      if (!req.files || Object.keys(req.files).length === 0) {
        //   return res.status(400).send("No files were uploaded.");
      } else {
        let resquire = await Uploadsingfile(req.files.image);
        imgUrl = resquire.path;
      }
    }
    //img

    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imgUrl,
    };
    let customer = await createCustomer(customerData);
    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
  postCreateArrCustomer: async (req, res) => {
    let customers = await createCustomerArr(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: customers,
      });
    }
  },
  GetCustomer: async (req, res) => {
    let customers = null;
    let limit = req.query.limit;
    let skip = req.query.skip;
    if (limit && skip) {
      customers = await getAllCustomer(limit, skip, req.query);
    } else {
      customers = await getAllCustomer();
    }
    return res.status(200).json({
      EC: 0,
      data: customers,
    });
  },
  updateCustomer: async (req, res) => {
    let { id, name, email, address, description } = req.body;
    console.log(id, name, email, address, description);
    let customers = await UpdateCustomer(id, name, email, address, description);
    return res.status(201).json({
      EC: 0,
      data: customers,
    });
  },
  deleteCustomer: async (req, res) => {
    let id = req.body.id;
    let result = await DeleteCustomer(id);
    return res.status(201).json({
      EC: 0,
      data: result,
    });
  },
  deleteArrCustomer: async (req, res) => {
    let ids = req.body.customerid;
    console.log(ids);
    let result = await deleteArrCustomerSv(ids);
    return res.status(200).json({ EC: 0, data: result });
  },
};

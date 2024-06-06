const BookModel = require("../Model/BookModel");
const BookServiceModel = require("../Model/BookModel");
const mailer = require("../Utils/Mail");

const createBookService = async (req, res) => {
  try {
    const saveBookService = await BookServiceModel.create(req.body);
    res.status(200).json({
      message: "Booked Service",
      flag: 1,
      data: saveBookService,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      flag: -1,
    });
  }
};

const getAllBookService = async (req, res) => {
  try {
    const bookService = await BookServiceModel.find()
      .populate("ServiceId")
      .populate("service_provider")
      .populate("user");
    res.status(201).json({
      message: "Boked Service featched",
      flag: 1,
      data: bookService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getDonePaymentById = async (req, res) => {
  try {
    const bookservice = await BookServiceModel.find({
      Status: "Done",
      user: req.params.id,
    })
      .populate("ServiceId")
      .populate("service_provider")
      .populate("user");
    if (bookservice === null) {
      res.status(404).json({
        message: "Book Service not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Book Service Fetched",
        flag: 1,
        data: bookservice,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getBookServiceById = async (req, res) => {
  const id = req.params.id;
  try {
    const bookservice = await BookServiceModel.findById(id)
      .populate("ServiceId")
      .populate("service_provider")
      .populate("user");
    if (bookservice === null) {
      res.status(404).json({
        message: "Book Service not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Book Service Featched",
        flag: 1,
        data: bookservice,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const updateBookService = async (req, res) => {
  const id = req.params.id;
  const newRole = req.body;

  try {
    let updatebookservice = await BookServiceModel.findByIdAndUpdate(
      id,
      newRole,
      { new: true }
    )
      .populate("ServiceId")
      .populate("service_provider")
      .populate("user");
    console.log(updatebookservice);
    if (!updatebookservice) {
      return res.status(404).json({
        message: "Book Service not found",
        flag: -1,
      });
    }

    if (!updatebookservice.user || !updatebookservice.user.Email) {
      return res.status(500).json({
        message: "User details not available",
        flag: -1,
      });
    }

    const mailRes = await mailer.mailSend(
      updatebookservice.user.Email,
      "Payment Done",
      "Dear user, your service has been successfully booked."
    );
    console.log(mailRes);

    res.status(200).json({
      message: "Book Service Updated Successfully...",
      flag: 1,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      flag: -1,
    });
  }
};

const deleteBookService = async (req, res) => {
  const id = req.params.id;

  try {
    const deletebookservice = await BookServiceModel.findByIdAndDelete(id)
      .populate("ServiceId")
      .populate("service_provider")
      .populate("user");
    if (deletebookservice === null) {
      res.status(404).json({
        message: "Book Service not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Book Service Deleted Successfully",
        flag: 1,
        data: deletebookservice,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getPendingPaymentById = async (req, res) => {
  try {
    const bookservice = await BookServiceModel.find({
      Status: "pending",
      user: req.params.id,
    })
      .populate("ServiceId")
      .populate("service_provider")
      .populate("user");
    if (bookservice === null) {
      res.status(404).json({
        message: "Book Service not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Book Service Fetched",
        flag: 1,
        data: bookservice,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getDonePaymentBySPId = async (req, res) => {
  try {
    const bookservice = await BookServiceModel.find({
      Status: "Done",
      service_provider: req.params.id,
    })
      .populate("ServiceId")
      .populate("service_provider")
      .populate("user");
    if (bookservice === null) {
      res.status(404).json({
        message: "Book Service not Found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Book Service Fetched",
        flag: 1,
        data: bookservice,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

module.exports = {
  createBookService,
  getAllBookService,
  updateBookService,
  deleteBookService,
  getBookServiceById,
  getDonePaymentById,
  getPendingPaymentById,
  getDonePaymentBySPId,
};

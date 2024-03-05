const BookServiceModel = require("../Model/BookModel");

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
      message: "Server Error",
      flag: -1,
      data: error,
    });
  }
};

const getAllBookService = async (req, res) => {
  try {
    const bookService = await BookServiceModel.find()
      .populate("ServiceId")
      .populate("Service_Provider")
      .populate("User");
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

const getBookServiceById = async (req, res) => {
  const id = req.params.id;
  try {
    const bookservice = await BookServiceModel.findById(id)
      .populate("ServiceId")
      .populate("Service_Provider")
      .populate("User");
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
    const updatebookservice = await BookServiceModel.findByIdAndUpdate(
      id,
      newRole
    );
    if (updatebookservice === null) {
      res.status(400).json({
        message: "Book Service not found",
        flag: -1,
      });
    } else {
      res.status(200).json({
        message: "Book Service Updated Successfully...",
        flag: 1,
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

const deleteBookService = async (req, res) => {
  const id = req.params.id;

  try {
    const deletebookservice = await BookServiceModel.findByIdAndDelete(id);
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

module.exports = {
  createBookService,
  getAllBookService,
  updateBookService,
  deleteBookService,
  getBookServiceById,
};

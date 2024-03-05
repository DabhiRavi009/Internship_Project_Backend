const router = require("express").Router();
const BookServiceController = require("../Controller/BookController");

router.post("/bookservice", BookServiceController.createBookService);
router.get("/bookservice", BookServiceController.getAllBookService);
router.get("/bookservice/:id", BookServiceController.getAllBookService);
router.put("/bookservice/:id", BookServiceController.updateBookService);
router.delete("/bookservice/:id", BookServiceController.deleteBookService);

module.exports = router;

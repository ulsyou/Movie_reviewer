const express = require("express");
const router = express.Router();
const api = require("../controllers/api");
const multer = require("multer");

//storage
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});
let upload = multer({ storage: storage }).single("image");

router.get("/", api.getAllPost);
router.get("/:id", api.getPostById);
router.post("/", upload, api.createPost);
router.patch("/:id", upload, api.updatePost);
router.delete("/:id", api.deletePost);

module.exports = router;
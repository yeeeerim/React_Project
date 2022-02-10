const express = require("express");
const router = express.Router();
// const { Video } = require("../models/Video");

const { auth } = require("../middleware/auth");
const multer = require("multer");

//=================================
//             Video
//=================================

router.post("/uploaadfiles", (req, res) => {
  // 비디오를 서버에 저장한다.
});

module.exports = router;

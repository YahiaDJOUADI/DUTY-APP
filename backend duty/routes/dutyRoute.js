const express = require("express")
const dutyController = require("../controllers/dutyController")
const router = express.Router()

router.get("/duty",dutyController.getDuty)
router.post("/duty",dutyController.addDuty)
router.delete("/duty/:id",dutyController.deleteDuty)


module.exports = router
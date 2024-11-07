const Duty = require("../models/Duty");

exports.getDuty = async (req, res) => {
    
        const dutys = await Duty.find();
        res.json(dutys);
    
};

exports.addDuty = async (req, res) => {
    try {
        const duty = await Duty.create(req.body); 
        res.json(duty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteDuty = async (req, res) => {

        const id = req.params.id;
        await Duty.findByIdAndDelete(id);
        res.json({ message: "DELETED" });
    

}
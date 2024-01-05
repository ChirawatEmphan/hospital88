const connection = require('../../db');

const getPatients = async(req,res) => {
    try{
        const data = await connection.query("SELECT * FROM patients");
        res.json({ data });
    } catch (error){
        res.status(500).json({ message: error,message });
    }
};

const getPatientWithCID = async (req, res) => {
    const cid = req.params?.cid;
    try{
        const data = await connection.query("SELECT * FROM patients WHERE cid='${cid}");
        res.json({data});
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

module.exports = { getPatients,getPatientWithCID};
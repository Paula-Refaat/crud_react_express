const router = require("express").Router();
const db = require("../Database/database");

router.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM contact_db";
    db.query(sqlGet, (error, result)=>{
        res.send(result);
    });
}); 


//create Post API.
router.post("/api/post",(req,res) => {
    const{name,email,contact} = req.body;
    const sqlInsert = "INSERT INTO `contact_db` (`name`, `email`, `contact`) VALUES (?, ?, ?)";
    db.query(sqlInsert, [name, email, contact], (error, result)=>{
        if(error){
            console.log(error);
        }
    });
});

router.delete("/api/remove/:id",(req,res) => {
    const{ id } = req.params;
    const sqlRemove = "DELETE FROM `contact_db` WHERE id=? ";
    db.query(sqlRemove, [ id ], (error, result)=>{
        if(error){
            console.log(error);
        }
    });
});

router.get("/api/get/:id", (req, res) => {
    const{ id } = req.params;
    const sqlGet = "SELECT * FROM contact_db WHERE id=?";
    db.query(sqlGet, id , (error, result)=>{
        res.send(result);
    });
});

router.put("/api/updateuser/:id", (req, res) => {
    const{ id } = req.params;
    const{name, email, contact} = req.body;
    const sqlUpdata = "UPDATE contact_db SET name=? , email=? , contact=? WHERE id=? ";
    db.query(sqlUpdata, [name, email, contact, id] , (error, result)=>{
        res.send(result);
    });
});

module.exports = router;
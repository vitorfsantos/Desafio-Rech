const Morador = require("../models/Morador");

const getAllMoradores = async (req, res) => {
  try {
    const moradoresList = await Morador.find();
    return res.render("index", { moradoresList, morador: null, moradoresDelete:null });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createMorador = async (req, res) => {
  const morador = req.body;

  if (!morador.apartamento) {
    return res.redirect("/");
  }

  try {
    await Morador.create(morador);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    
    const moradoresList = await Morador.find();
    if(req.params.method == "update"){
      const morador = await Morador.findOne({ _id: req.params.id });
      res.render("index", { morador, moradoresDelete:null, moradoresList });
    }else{
      const moradoresDelete = await Morador.findOne({ _id: req.params.id });
      res.render("index", { morador:null, moradoresDelete, moradoresList });
    }
    
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const updateOneMorador = async(req, res)=>{
  try{
    const morador = req.body;
    await Morador.updateOne({_id: req.params.id},morador)
    res.redirect("/")
  }catch{
    res.status(500).send({ error: err.message });
  }

}
const deleteOneMorador = async (req,res)=>{
  try{
    await Morador.deleteOne({_id: req.params.id})
    res.redirect("/")
  }catch(err){
    res.status(500).send({ error: err.message });
  }
}



module.exports = {
  getAllMoradores,
  createMorador,
  getById,
  updateOneMorador,
  deleteOneMorador,
};

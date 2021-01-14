const Persona = require("../models/Persona");
const {response}=require('express')


const getPersonById=async(req,res) => {
    let id = req.body.id;
    const person=await Persona.findOne({_id:id},function(err,data){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }else{
             
        res.json({
            msg: 'Matricula encontrado',
            person:data,
            
        }); 
            
        }
    });
}
const getPersonas=async(req,res)=>{
    const persona=await Persona.find().select('-isNuevo   -__v') .lean()
    .exec()
;
    res.json({
       ok:true,
        personas:persona
        
    }); 
}

const createPerson=async (req,res=response)=>{
    const{nombre,apellido,monto,isNuevo,fecha_matricula}=req.body;
 
    try {
       
        const persona=new Persona(req.body);
        if(isNuevo){
            persona.estado ="SI"
        }else{
            persona.estado = "NO"

        }
        const savedPersona= await persona.save();

        res.json({
            msg: 'Usuario creado',
            persona,
            
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error inesperado'
        })
        
    }
  
};

const searchPerson=async(req,res=response)=>{
            
        const busqueda  =req.params.busqueda;
      

        const regex=new RegExp(busqueda,'i');
        const personas=await Persona.find({nombre:regex});
        res.json({
            ok:true,
            personas:personas,
        });
 

}

module.exports ={
    searchPerson,
    getPersonById,
    createPerson,
    getPersonas
}

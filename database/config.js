const mongoose = require('mongoose');
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_DB
  } = process.env;
const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}
const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}`;
  
const dbConnection = async()=>{
   
    try {
        await mongoose.connect(url,options);
        console.log('db online');
    } catch (error) {
        console.log(error);
        throw new Error('error la hora de iniciar la BD ver logs');
        
    }
    

}
module.exports={
    dbConnection
}
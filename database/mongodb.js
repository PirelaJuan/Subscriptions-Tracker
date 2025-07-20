import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";


if (!DB_URI){
  throw new Error('Please define the MONGODB_URI envinroment variable inside .env.<development/production>.local');
}

const connectDataBase = async () =>{

  try {
    
    await mongoose.connect(DB_URI);

    console.log(`Connected to database in ${NODE_ENV} mode`)
    
  } catch (error) {
    console.log("Error connecting to data base: ", error);

    console.exit(1);
  }
}

export default connectDataBase;
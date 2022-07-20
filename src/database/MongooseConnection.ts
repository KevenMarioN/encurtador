import mongoose from "mongoose";

export default class MongooseConnection{
  public async connect() : Promise<void>{
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log('connect')
    } catch (error) {
      console.log(error)
      process.exit(1);
    }
  }
}
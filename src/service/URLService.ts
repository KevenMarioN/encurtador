import { URL, URLModel } from "../database/entity/Url.Entity.moogo";
import urlEntity from "../entity/url.entity";

export default class URLService{
  static async findUrl(originURL : string){
    const url = await URLModel.findOne({
      where : {
        originURL
      }
    })
    if(!url){
      throw new Error("SEM DADO");
    }
    return url;
  }
  static async create(originURL : string) : Promise<URL>{
    const newUrlShort = new urlEntity(originURL);
    const result = await URLModel.create(newUrlShort);
    return result as URL
  }
  static async findById(id : string) : Promise<URL>{
    const short = await URLModel.findOne({
      where : {
        id
      }
    });
    return short;
  }
}

import shortid from "shortid";
import URL from "../utils/url";

export default class urlEntity{
    constructor(
      public originURL : string,
      public id ?: string,
      public shortURL?: string
    ){
      if(!this.id){
        this.id = shortid.generate();
      }
      this.shortURL = `${URL}/${this.id}`
    }

}
import urlEntity from "../entity/url.entity";
import URLService from "../service/URLService";


class URLController {
  static async shortener(url: string): Promise<any> {

    return await URLService.create(url)
  }
  static async redirect(id : string):  Promise<urlEntity>{
    return await URLService.findById(id)
  }
}

export default URLController;
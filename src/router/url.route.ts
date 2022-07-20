import  URLController  from "../controller/URLController";
import { Request, Response, Router } from "express";


const URLRouter = Router();

URLRouter.post('/shortener',async (request : Request<{},{},{originUrl : string}>,response : Response) => {
  const { originUrl } = request.body;
  
  const {shortURL} = await URLController.shortener(originUrl);
  response.send({
    originUrl,
    shortURL
  })
})

URLRouter.get('/:shortid',async (request : Request<{shortid:string}>,response : Response) =>{
  const {shortid} = request.params;
  const {originURL} = await URLController.redirect(shortid);
  response.redirect(originURL);
})

export default URLRouter;
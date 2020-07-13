import { Router } from "express";
import {listUrls, shortenUrl} from "./controllers/urlController";

export default function register () {
  const router = Router()
  router.post('/urls/shorten', shortenUrl)
  router.get('/urls', listUrls)
  return router;
}

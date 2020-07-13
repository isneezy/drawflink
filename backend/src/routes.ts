import { Router } from "express";
import {shortenUrl} from "./controllers/urlController";

export default function register () {
  const router = Router()
  router.post('/urls/shorten', shortenUrl)
  return router;
}

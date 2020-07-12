import {Application} from "express";
import {shortenUrl} from "./controllers/urlController";

export default function register (app: Application) {
  app.post('/api/urls/shorten', shortenUrl)
}

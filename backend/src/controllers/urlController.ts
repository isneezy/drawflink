import {Request, Response} from "express";
import {generateId} from "../utils";

export function shortenUrl(req: Request, res: Response) {
  const { url } = req.body
  const code = generateId()
  const short = `https://pbid.io/${code}`
  res.json({ url, short, code })
}

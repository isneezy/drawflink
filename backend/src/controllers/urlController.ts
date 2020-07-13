import {Request, Response} from "express";
import consola from 'consola'
import * as service from '../services/urlShortenerService'
import {Url} from "../models";

export function shortenUrl(req: Request, res: Response) {
  const { url } = req.body
  return service.shortenUrl(url).then((payload) => res.json(payload.toObject()))
    .catch((error) => {
      consola.error(error)
      if (error.code === 11000) {
        res.status(500).json({ error: 'Could not generate unique shortened url'})
      } else {
        res.status(500).json({ error: 'An error occurred while serving your request.'})
      }
    })
}

export function listUrls(req: Request, res: Response) {
  Url.paginate({}, req.pageOptions, (err, result) => {
    if (err) res.status(500).json({ error: `An error occurred while processing your request ${err.message}`})
    res.json(result)
  })
}

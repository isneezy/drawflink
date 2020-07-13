import {Request, Response} from "express";
import consola from 'consola'
import * as service from '../services/urlShortenerService'

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

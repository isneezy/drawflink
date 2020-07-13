import {Url} from "../models";
import {generateId} from "../utils";

export function shortenUrl(url: string) {
  const shortCode = generateId()
  return Url.create({
    url,
    shortUrl: ` https://pbid.io/${shortCode}`,
    shortCode
  })
}

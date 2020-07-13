import consola from 'consola'
import mongoose, {Schema, Document} from 'mongoose'

export interface IUrl extends Document {
  url: string,
  shortUrl: string
  shortCode: string
}
const UrlSchema: Schema = new Schema<IUrl>({
  url: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  shortCode: { type: String, required: true }
})
export const Url = mongoose.model<IUrl>('Url', UrlSchema)

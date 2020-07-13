import consola from 'consola'
import mongose from 'mongoose'
import express, {NextFunction, Request} from "express";

declare module 'express' {
  interface Request {
    pageOptions: mongose.PaginateOptions
  }
}

declare module 'mongoose' {
  interface Model<T extends Document, QueryHelpers = {}> {
    paginate: (query: FilterQuery<T>, options: mongose.PaginateOptions, callback: (err: Error, result: PaginateResult<T>) => void) => void
  }
}

function prepareOptions (options:  mongose.PaginateOptions):  mongose.PaginateOptions {
  return { page: 1, limit: 10, ...options }
}

export default function paginationMiddleware(options?: mongose.PaginateOptions): (req: express.Request, resp: express.Response, next: express.NextFunction) => void {
  return (req, resp, next) => {
    options = prepareOptions(options)
    options.page = getParam(req.query.page) || options.page
    options.limit = getParam(req.query.limit) || options.limit
    req.pageOptions = options
    next()
  }
}

function getParam(value: string|string[]|Record<any, any>) {
  if (typeof value === 'string') return parseInt(value, 10)
  return null
}

import { HttpException } from './http-exception'

export class HttpParseException extends HttpException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, HttpParseException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

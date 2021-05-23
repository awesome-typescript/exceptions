import { FormatException } from '../system'

export class CookieException extends FormatException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, CookieException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

import { ExternalException } from '../system.runtime.interopservices'

export class HttpException extends ExternalException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, HttpException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

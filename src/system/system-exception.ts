import { Exception } from '../exception'

export class SystemException extends Exception {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, SystemException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

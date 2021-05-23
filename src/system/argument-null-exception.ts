import { ArgumentException } from './argument-exception'

export class ArgumentNullException extends ArgumentException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, ArgumentNullException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

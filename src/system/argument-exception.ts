import { SystemException } from './system-exception'

export class ArgumentException extends SystemException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, ArgumentException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

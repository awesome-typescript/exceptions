import { DataException } from './data-exception'

export class DuplicateNameException extends DataException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, DuplicateNameException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

import { DataException } from './data-exception'

export class ReadOnlyException extends DataException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, ReadOnlyException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

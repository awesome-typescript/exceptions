import { SystemException } from '../system'

export class ExternalException extends SystemException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, ExternalException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

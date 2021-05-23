import { SystemException } from '../system'

export class AuthenticationException extends SystemException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, AuthenticationException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

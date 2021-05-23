import { AuthenticationException } from './authentication-exception'

export class InvalidCredentialException extends AuthenticationException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, InvalidCredentialException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

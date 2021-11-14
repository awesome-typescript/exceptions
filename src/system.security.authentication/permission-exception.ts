import { AuthenticationException } from './authentication-exception'

export class PermissionException extends AuthenticationException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, PermissionException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

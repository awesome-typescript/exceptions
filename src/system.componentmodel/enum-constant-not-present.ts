import { ArgumentException } from '../system'

export class EnumConstantNotPresent extends ArgumentException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, EnumConstantNotPresent.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

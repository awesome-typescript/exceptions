import { IoException } from './io-exception'

export class FileNotFoundException extends IoException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, FileNotFoundException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

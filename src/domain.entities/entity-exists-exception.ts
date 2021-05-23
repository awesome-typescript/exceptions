import { PersistenceException } from './persistence-exception'

export class EntityExistsException extends PersistenceException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, EntityExistsException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

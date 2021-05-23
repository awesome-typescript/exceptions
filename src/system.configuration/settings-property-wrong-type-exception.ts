import { ConfigurationException } from './configuration-exception'

export class SettingsPropertyWrongTypeException extends ConfigurationException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, SettingsPropertyWrongTypeException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

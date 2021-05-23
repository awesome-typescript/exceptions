import { ConfigurationException } from './configuration-exception'

export class SettingsPropertyNotFoundException extends ConfigurationException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, SettingsPropertyNotFoundException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}

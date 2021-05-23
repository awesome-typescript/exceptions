export class Exception extends Error {
  private _name: string

  private _stack: string | undefined

  private _names: string[]

  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, Exception.prototype)
    Error.captureStackTrace(this, this.constructor)

    this._name = this.constructor.name
    this._names = [this.constructor.name, Error.prototype.name]

    if (message) {
      this.message = message
    }
    if (error?.stack) {
      this.stack = error.stack
    }
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get stack(): string | undefined {
    return this._stack
  }

  set stack(value: string | undefined) {
    this._stack = value
  }

  get names(): string[] {
    return this._names
  }

  set names(value: string[]) {
    this._names = value
  }
}

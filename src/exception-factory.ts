import { Exception } from './exception'

import {
  SystemException,
  ArithmeticException,
  FormatException,
  NotImplementedException,
  ArgumentNullException,
  ArgumentException,
} from './system'

import { EnumConstantNotPresent } from './system.componentmodel'

import {
  IoException,
  DirectoryNotFoundException,
  FileNotFoundException,
  FileFormatException,
} from './system.io'

import {
  ConfigurationException,
  SettingsPropertyWrongTypeException,
  SettingsPropertyNotFoundException,
  SettingsPropertyIsReadOnlyException,
} from './system.configuration'

import {
  DataException,
  ReadOnlyException,
  DuplicateNameException,
} from './system.data'

import { CookieException } from './system.net'

import { ExternalException } from './system.runtime.interopservices'

import {
  AuthenticationException,
  InvalidCredentialException,
} from './system.security.authentication'

import {
  HttpException,
  HttpRequestValidationException,
  HttpParseException,
} from './system.web'

import {
  EntityNotFoundException,
  EntityExistsException,
  PersistenceException,
} from './domain.entities'

type ErrorRequest = {
  name: string
  message: string
  stack: string
}

const createException = (error: ErrorRequest): Exception => {
  const exception = new Exception()

  exception.name = error.name
  exception.message = error.message
  exception.stack = error.stack

  return exception
}

export const exceptionFactory = (error: ErrorRequest): SystemException => {
  // domain.entities
  if (error.name === EntityNotFoundException.name) {
    return new EntityNotFoundException(error.message, createException(error))
  }
  if (error.name === EntityExistsException.name) {
    return new EntityExistsException(error.message, createException(error))
  }
  if (error.name === PersistenceException.name) {
    return new PersistenceException(error.message, createException(error))
  }

  // system.web
  if (error.name === HttpRequestValidationException.name) {
    return new HttpRequestValidationException(
      error.message,
      createException(error),
    )
  }
  if (error.name === HttpParseException.name) {
    return new HttpParseException(error.message, createException(error))
  }
  if (error.name === HttpException.name) {
    return new HttpException(error.message, createException(error))
  }

  // system.security.authentication
  if (error.name === InvalidCredentialException.name) {
    return new InvalidCredentialException(error.message, createException(error))
  }
  if (error.name === AuthenticationException.name) {
    return new AuthenticationException(error.message, createException(error))
  }

  // system.configuration
  if (error.name === SettingsPropertyWrongTypeException.name) {
    return new SettingsPropertyWrongTypeException(
      error.message,
      createException(error),
    )
  }
  if (error.name === SettingsPropertyNotFoundException.name) {
    return new SettingsPropertyNotFoundException(
      error.message,
      createException(error),
    )
  }
  if (error.name === SettingsPropertyIsReadOnlyException.name) {
    return new SettingsPropertyIsReadOnlyException(
      error.message,
      createException(error),
    )
  }
  if (error.name === ConfigurationException.name) {
    return new ConfigurationException(error.message, createException(error))
  }

  // system.net
  if (error.name === CookieException.name) {
    return new CookieException(error.message, createException(error))
  }

  // system.runtime.interopservices
  if (error.name === ExternalException.name) {
    return new ExternalException(error.message, createException(error))
  }

  // system.data
  if (error.name === ReadOnlyException.name) {
    return new ReadOnlyException(error.message, createException(error))
  }
  if (error.name === DuplicateNameException.name) {
    return new DuplicateNameException(error.message, createException(error))
  }
  if (error.name === DataException.name) {
    return new DataException(error.message, createException(error))
  }

  // system.io
  if (error.name === DirectoryNotFoundException.name) {
    return new DirectoryNotFoundException(error.message, createException(error))
  }
  if (error.name === FileNotFoundException.name) {
    return new FileNotFoundException(error.message, createException(error))
  }
  if (error.name === FileFormatException.name) {
    return new FileFormatException(error.message, createException(error))
  }
  if (error.name === IoException.name) {
    return new IoException(error.message, createException(error))
  }

  // system.componentmodel
  if (error.name === EnumConstantNotPresent.name) {
    return new EnumConstantNotPresent(error.message, createException(error))
  }

  // system
  if (error.name === ArgumentNullException.name) {
    return new ArgumentNullException(error.message, createException(error))
  }
  if (error.name === ArgumentException.name) {
    return new ArgumentException(error.message, createException(error))
  }
  if (error.name === ArithmeticException.name) {
    return new ArithmeticException(error.message, createException(error))
  }
  if (error.name === NotImplementedException.name) {
    return new NotImplementedException(error.message, createException(error))
  }
  if (error.name === FormatException.name) {
    return new FormatException(error.message, createException(error))
  }
  if (error.name === SystemException.name) {
    return new SystemException(error.message, createException(error))
  }

  return new SystemException(error.message)
}

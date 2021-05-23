import { exceptionFactory } from './exception-factory'
import { SystemException } from './system'
import { AuthenticationException } from './system.security.authentication'

describe('exception-factory', () => {
  let expectedError: SystemException

  beforeEach(() => {
    expectedError = exceptionFactory({
      name: 'BannedException',
      message: '{{message}}',
      stack: '{{trace}}',
    })
  })

  test('should create factory, with correct error type', () => {
    expect(expectedError).toBeInstanceOf(AuthenticationException)
    expect(expectedError).toBeInstanceOf(SystemException)
  })

  test('should create factory, with correct error object', () => {
    expect(expectedError.name).toBe('BannedException')
    expect(expectedError.names).toHaveLength(5)
    expect(expectedError.names).toEqual([
      'BannedException',
      'AuthenticationException',
      'SystemException',
      'Exception',
      'Error',
    ])
    expect(expectedError.message).toBe('{{message}}')
    expect(expectedError.stack).toBe('{{trace}}')
    expect(expectedError.stack).not.toBeUndefined()
    expect(expectedError.stack).not.toBeNull()
  })
})

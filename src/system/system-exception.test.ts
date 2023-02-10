import { Exception } from '../exception'

import { SystemException } from './system-exception'

describe('SystemException', () => {
  test('should throw an error, with correct parent type (Exception)', () => {
    expect(() => {
      throw new Exception()
    }).toThrow(Exception)
  })

  test('should throw an error, with correct parent instance (Exception)', () => {
    try {
      throw new Exception()
    } catch (error) {
      expect(error).toBeInstanceOf(Exception)
    }
  })

  test('should throw an error, with correct type', () => {
    expect(() => {
      throw new SystemException()
    }).toThrow(SystemException)
  })

  test('should throw an error, with correct instance', () => {
    try {
      throw new SystemException()
    } catch (error) {
      expect(error).toBeInstanceOf(SystemException)
    }
  })

  test('should throw an error, with correct name', () => {
    try {
      throw new SystemException()
    } catch (error: any) {
      expect(error.name).toBe('SystemException')
    }
  })

  test('should throw an error, with correct names', () => {
    try {
      throw new SystemException()
    } catch (error: any) {
      expect(error.names).toHaveLength(3)
      expect(error.names).toEqual(['SystemException', 'Exception', 'Error'])
    }
  })

  test('should throw an error, with correct message', () => {
    expect(() => {
      throw new SystemException('SystemException error')
    }).toThrow('SystemException error')
  })

  test('should throw an error, with a not empty stack', () => {
    try {
      throw new SystemException()
    } catch (error: any) {
      expect(error.stack).not.toBeUndefined()
      expect(error.stack).not.toBeNull()
      expect(error.stack).not.toBe('')
    }
  })

  test('should throw an error, with a parent stack', () => {
    try {
      throw new SystemException('SystemException error 1')
    } catch (error: any) {
      expect(error.message).toBe('SystemException error 1')
      expect(error.stack).not.toBeUndefined()
      expect(error.stack).not.toBeNull()
      expect(error.stack).not.toBe('')

      try {
        throw new SystemException('SystemException error 2', error)
      } catch (error_: any) {
        expect(error_.message).toBe('SystemException error 2')
        expect(error_.stack).not.toBeUndefined()
        expect(error_.stack).not.toBeNull()
        expect(error_.stack).not.toBe('')
        expect(error.stack).toEqual(error_.stack)
      }
    }
  })
})

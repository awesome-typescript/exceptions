import { Exception } from '../exception'
import { SystemException } from '../system'

import { PersistenceException } from './persistence-exception'
import { EntityNotFoundException } from './entity-not-found-exception'

describe('EntityNotFoundException', () => {
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

  test('should throw an error, with correct parent type (SystemException)', () => {
    expect(() => {
      throw new SystemException()
    }).toThrow(SystemException)
  })

  test('should throw an error, with correct parent instance (SystemException)', () => {
    try {
      throw new SystemException()
    } catch (error) {
      expect(error).toBeInstanceOf(SystemException)
    }
  })

  test('should throw an error, with correct parent type (PersistenceException)', () => {
    expect(() => {
      throw new PersistenceException()
    }).toThrow(PersistenceException)
  })

  test('should throw an error, with correct parent instance (PersistenceException)', () => {
    try {
      throw new PersistenceException()
    } catch (error) {
      expect(error).toBeInstanceOf(PersistenceException)
    }
  })

  test('should throw an error, with correct type', () => {
    expect(() => {
      throw new EntityNotFoundException()
    }).toThrow(EntityNotFoundException)
  })

  test('should throw an error, with correct instance', () => {
    try {
      throw new EntityNotFoundException()
    } catch (error) {
      expect(error).toBeInstanceOf(EntityNotFoundException)
    }
  })

  test('should throw an error, with correct name', () => {
    try {
      throw new EntityNotFoundException()
    } catch (error: any) {
      expect(error.name).toBe('EntityNotFoundException')
    }
  })

  test('should throw an error, with correct names', () => {
    try {
      throw new EntityNotFoundException()
    } catch (error: any) {
      expect(error.names).toHaveLength(5)
      expect(error.names).toEqual([
        'EntityNotFoundException',
        'PersistenceException',
        'SystemException',
        'Exception',
        'Error',
      ])
    }
  })

  test('should throw an error, with correct message', () => {
    expect(() => {
      throw new Exception('EntityNotFoundException error')
    }).toThrow('EntityNotFoundException error')
  })

  test('should throw an error, with a not empty stack', () => {
    try {
      throw new EntityNotFoundException()
    } catch (error: any) {
      expect(error.stack).not.toBeUndefined()
      expect(error.stack).not.toBeNull()
      expect(error.stack).not.toBe('')
    }
  })

  test('should throw an error, with a parent stack', () => {
    try {
      throw new EntityNotFoundException('EntityNotFoundException error 1')
    } catch (error: any) {
      expect(error.message).toBe('EntityNotFoundException error 1')
      expect(error.stack).not.toBeUndefined()
      expect(error.stack).not.toBeNull()
      expect(error.stack).not.toBe('')

      try {
        throw new EntityNotFoundException(
          'EntityNotFoundException error 2',
          error,
        )
      } catch (error_: any) {
        expect(error_.message).toBe('EntityNotFoundException error 2')
        expect(error_.stack).not.toBeUndefined()
        expect(error_.stack).not.toBeNull()
        expect(error_.stack).not.toBe('')
        expect(error.stack).toEqual(error_.stack)
      }
    }
  })
})

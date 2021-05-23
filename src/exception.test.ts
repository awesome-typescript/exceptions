import { Exception } from './exception'

describe('Exception', () => {
  test('should throw an error, with correct type', () => {
    expect(() => {
      throw new Exception()
    }).toThrow(Exception)
  })

  test('should throw an error, with correct instance', () => {
    try {
      throw new Exception()
    } catch (error) {
      expect(error).toBeInstanceOf(Exception)
    }
  })

  test('should throw an error, with correct name', () => {
    try {
      throw new Exception()
    } catch (error) {
      expect(error.name).toBe('Exception')
    }
  })

  test('should throw an error, with correct names', () => {
    try {
      throw new Exception()
    } catch (error) {
      expect(error.names).toHaveLength(2)
      expect(error.names).toEqual(['Exception', 'Error'])
    }
  })

  test('should throw an error, with correct message', () => {
    expect(() => {
      throw new Exception('Exception error')
    }).toThrow('Exception error')
  })

  test('should throw an error, with a not empty stack', () => {
    try {
      throw new Exception()
    } catch (error) {
      expect(error.stack).not.toBeUndefined()
      expect(error.stack).not.toBeNull()
      expect(error.stack).not.toBe('')
    }
  })

  test('should throw an error, with a parent stack', () => {
    try {
      throw new Exception('Exception error 1')
    } catch (error) {
      expect(error.message).toBe('Exception error 1')
      expect(error.stack).not.toBeUndefined()
      expect(error.stack).not.toBeNull()
      expect(error.stack).not.toBe('')

      try {
        throw new Exception('Exception error 2', error)
      } catch (error_) {
        expect(error_.message).toBe('Exception error 2')
        expect(error_.stack).not.toBeUndefined()
        expect(error_.stack).not.toBeNull()
        expect(error_.stack).not.toBe('')
        expect(error.stack).toEqual(error_.stack)
      }
    }
  })
})

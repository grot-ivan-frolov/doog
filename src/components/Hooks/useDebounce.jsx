import { useEffect, useState } from 'react'

export const useDebounce = (value, ms = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedValue(value)
    }, ms)

    return () => {
      clearTimeout(timeOutId)
    }
  }, [ms, value])

  return debouncedValue
}

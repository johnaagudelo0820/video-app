import { useState, useEffect } from 'react'

export const useInitialState = (API, initial) => {
  const [data, setData] = useState(initial)

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])

  return data
}
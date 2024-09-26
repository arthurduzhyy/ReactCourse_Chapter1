import { useEffect, useState } from 'react'

const useGetData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const load = () => {
    setLoading(true)

    fetch(url)
      .then(r => r.json())
      .then(json => setData(json))
      .catch(e => {
        setError(e)
        console.error(e)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [url])

  return { data, setData, loading, error }
}

export default useGetData
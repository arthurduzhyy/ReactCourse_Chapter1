import { useEffect, useState } from 'react'

const useGetData = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const load = () => {
    setLoading(true)

    fetch(url)
      .then(r => r.json())
      .then(json => setData(json))
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [url])

  return { data, loading, error }
}

export default useGetData
import { useState, useEffect } from "react"
import { IAnimalResponse } from "../types"

export const useAnimals = (animal: string) => {
  const [animals, setAnimals] = useState<IAnimalResponse>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animal}`, {
          headers: {
            'X-Api-Key': import.meta.env.VITE_ANIMALS_API_KEY
          }
        })
        const data: IAnimalResponse = await response.json()
        setAnimals(data)
        setLoading(false)
      } catch (error) {
        setError(`error: ${error}`)
        setLoading(false)
        console.error(error)
      }
    }

    fetchData()
  }, [animal])

  return {animals, loading, error}
}
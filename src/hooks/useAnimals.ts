import { useState, useEffect } from "react"
import { IAnimalResponse } from "../types"

const cache: Record<string, IAnimalResponse> = {}

export const useAnimals = (animal: string) => {
  const [animals, setAnimals] = useState<IAnimalResponse>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if(animal === "") return 
      setLoading(true)
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animal}`, {
          headers: {
            'X-Api-Key': import.meta.env.VITE_ANIMALS_API_KEY
          }
        })
        const data: IAnimalResponse = await response.json()
        cache[animal] = data
        setAnimals(data)
        setLoading(false)
      } catch (error) {
        setError(`error: ${error}`)
        setLoading(false)
        console.error(error)
      }
    }

    if(!(cache[animal])){
      fetchData()
    } else {
      setAnimals(cache[animal])
    }
  }, [animal])

  return {animals, loading, error}
}
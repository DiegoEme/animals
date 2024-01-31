import AnimalList from "../components/AnimalList"
import { IAnimalResponse } from "../types"

export default function Favorites () {
  const myAnimals = localStorage.getItem("myFavAnimals")

  let favoriteAnimals: IAnimalResponse = []

  if(myAnimals !== null){
    favoriteAnimals  = JSON.parse(myAnimals)
  }

  
  return (
    <div>
      {<AnimalList animals={favoriteAnimals}/>}
    </div>
  )
}
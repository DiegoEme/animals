import { Animal, IAnimalResponse } from "../types"
import star from "../assets/star.png"
import starFilled from "../assets/star-filled.png"


interface IAnimalCard {
  animal: Animal
}
export default function AnimalCard ({animal}: IAnimalCard){
  const handleAnimalOnClick = () => {
    const favoriteAnimals = localStorage.getItem("myFavAnimals")
    let favoriteAnimalJson: IAnimalResponse = []

    if(favoriteAnimals !== null){
      favoriteAnimalJson = JSON.parse(favoriteAnimals)
      const alreadyExists = favoriteAnimalJson.find((favorite) => favorite.name === animal.name)
      if(alreadyExists){
        //do not save
        //TODO remove it
        return
      }
    }
    
    localStorage.setItem("myFavAnimals", JSON.stringify([...favoriteAnimalJson, {...animal, isFav: true}]))
  }

  return (
  <div 
    className="flex gap-2 max-w-4xl justify-between cursor-pointer"
    onClick={handleAnimalOnClick}
  >
    <h3>{animal.name}</h3>
    {animal.isFav ? <img src={starFilled} height={25} width={25} alt="star" /> : 
      <img src={star} height={25} width={25} alt="star filled" />}
  </div>
  )
}
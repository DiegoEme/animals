import { Animal } from "../types"

interface IAnimalCard {
  animal: Animal
}
export default function AnimalCard ({animal}: IAnimalCard){

  return (
  <div>
    <h3>{animal.name}</h3>
  </div>)
}
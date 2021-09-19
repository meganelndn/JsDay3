// Exercise 26
let cat = {
    name: "Luna",
    breed: "Siamese",
    color: "grey"
}
let dog = {
    name: "Doggy",
    breed: "Labrador",
    color: "black"
}
let horse = {
    name: "Kira",
    breed: "Icelandic Pony",
    color: "white"
}

console.log(`The cat's name is ${cat.name} and she is a ${cat.color} ${cat.breed} cat.`)
console.log(`I have ${dog.color} ${dog.breed} called ${dog.name}.`)
console.log(`The horse's name is ${horse.name} and she is a ${horse.color} ${horse.breed}.`)

// Exercise 27
cat.name = "Sushi";
cat.color = "white";
console.log(cat)

// Exercise 28
let objectArray = [cat, dog, horse];
console.log(objectArray);

objectArray.forEach((object) => {
    console.log(object.name)
    console.log(object.breed)
    console.log(object.color)
})

// Exercise 29
let randomAnimal = Math.random([objectArray])
console.log(randomAnimal)

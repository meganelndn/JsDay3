// Exercise 26
// Create 3 animals objects with 3 different properties each. E.g a bird with
// the properties: sound, description and number_of_spicies. Add some text/numbersfor each property.
console.info("%cExercise 26", "color: black; background: pink")

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
// Change two of the three properties of the one of the objects, use DOT-notation and
// bracket notation to change the objects properties.
console.info("%cExercise 27", "color: black; background: pink")

cat.name = "Sushi";
cat.color = "white";
console.log(cat)

// Exercise 28
// Take the three different animal objects and place them in an array. loop through each object
// and console.log every property of each object. 
console.info("%cExercise 28", "color: black; background: pink")

let objectArray = [cat, dog, horse];
console.log(objectArray);

objectArray.forEach((object) => {
    console.log(object.name)
    console.log(object.breed)
    console.log(object.color)
})

// Exercise 29
// Create a random machine. The random machine has to choose a random animal from the animal objects array and pick one random property.
// Use the Math object and an array of property names to create the machine.
console.info("%cExercise 29", "color: black; background: pink")

let randomAnimal = objectArray[Math.floor(Math.random() * objectArray.length)];
console.log(randomAnimal)

// Exercise 30
// Create an object that works as a quiz program. The quiz object needs to have an
// array of objects with the properties: quiz questions, quiz answers and a property
// to check if the answer is answered correctly.
// It also needs a function to run the quiz program. The function needs to prompt
// the user for a question. (Hint: use prompt in JS… google it)
// when the question is answered it needs to check if the answer is correct or not
// and then go to the next question. Finally the function should inform the quiz
// player how many questions answered correctly.
// To solve this exercise you can use "prompt"(to prompt the user for an answer) and "alert" to inform the user.... e.g. how many questions were answered correctly. You should NOT use the DOM. 
console.info("%cExercise 30", "color: black; background: pink")

let result;
const quiz = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      validity: {
        correct: "You're right!",
        false: "You're wrong!"
      }
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      validity: {
        correct: "You're right!",
        false: "You're wrong!"
      }
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      validity: {
        correct: "You're right!",
        false: "You're wrong!"
      }
    }
  ];

function quizProgram() {
    for (let i  = 0; i < quiz.length; i++) {
        answers = prompt(quiz[i].question);
    }

    if (answers !== quiz[i].answers) {
        alert(quiz[i].false);
        i--;
    } else {
        alert(quiz[i].correct);
    }
}
quizProgram()
import axios from "axios";

const API_URL = `https://opentdb.com/api.php?amount=10`;

export const getQuizFromTrivia = async () => {
  try {
    const res = await axios({
      method: "get",
      url: API_URL
    });

    return res.data.results.map(item => {
      return {
        question: item.question,
        type: item.type,
        answers: sortAnswer([...item.incorrect_answers, item.correct_answer], item.type),
        correct_answer: item.correct_answer
      };
    });
  } catch (error) {
    console.log(error);
  }
};

const sortAnswer = (arr, type) => {
  //random sort answer if it's multiple question
  if (type === "multiple") {
    return shuffle(arr);
  } else if (type === "boolean") {
    // if it's true/false (boolean) question, then the order is fixed as True, False
    return ["True", "False"];
  } else {
    return arr;
  }
};

const shuffle = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

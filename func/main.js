import axios from "axios";
import { XmlEntities } from "html-entities";
const API_URL = `https://opentdb.com/api.php?amount=10`;

export const getQuizFromTrivia = async () => {
  try {
    const res = await axios({
      method: "get",
      url: API_URL
    });

    return res.data.results.map((item, index) => {
      const entities = new XmlEntities();
      const answer = item.incorrect_answers.map(i => entities.decode(i));
      const correct_answer = entities.decode(item.correct_answer);
      return {
        id: index,
        question: entities.decode(item.question),
        type: item.type,
        answers: sortAnswer([...answer, correct_answer], item.type),
        correct_answer: correct_answer
      };
    });
  } catch (error) {
    console.log(error);
  }
};

export const sortAnswer = (arr, type) => {
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

export const shuffle = array => {
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

export const secondsToHms = d => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + ":" : "";
  var mDisplay = m > 0 ? m + ":" : "";
  var sDisplay = s;
  return hDisplay + mDisplay + sDisplay;
};

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
        incorrect_answers: item.incorrect_answers,
        correct_answer: item.correct_answer
      };
    });
  } catch (error) {
    console.log(error);
  }
};

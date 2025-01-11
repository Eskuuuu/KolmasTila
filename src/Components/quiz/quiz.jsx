import React, { useState } from "react";
import "./quiz.css";

const questions = [
  {
    questionText:
      " Etsitkö enemmän sosiaalista aktiviteettiä vai yksinäistä tekemistä?",
    answerOptions: [
      {
        text: "Ryhmässä",
        tags: ["sosiaalinen"],
      },
      {
        text: "Yksin",
        tags: ["yksinäinen"],
      },
      {
        text: "Molemmat",
        tags: ["sosiaalinen", "yksinäinen"],
      },
    ],
  },
  {
    questionText: " Tekemistä sisätiloissa vai ulkona?",
    answerOptions: [
      {
        text: "Sisätiloissa",
        tags: ["sisätilat"],
      },
      {
        text: "Ulkona",
        tags: ["ulkona"],
      },
      {
        text: "Molemmat käy",
        tags: ["sisätilat", "ulkona"],
      },
    ],
  },
  {
    questionText: " Liikuntaa tai pelaamista?",
    answerOptions: [
      {
        text: "Liikuntaa",
        tags: ["liikunta"],
      },
      {
        text: "Pelaamista",
        tags: ["pelaaminen"],
      },
      {
        text: "Molemmat",
        tags: ["liikunta", "pelaaminen"],
      },
    ],
  },
  {
    questionText: " Kiinnostaako käsityöt?",
    answerOptions: [
      {
        text: "Kyllä",
        tags: ["käsityöt"],
      },
      {
        text: "Ei",
        tags: [],
      },
    ],
  },
];

const activities = [
  {
    activity: "Käy videopelikerhossa! Tutustu lisää osoitteessa: ",
    tags: ["sosiaalinen", "sisätilat", "pelaaminen"],
    link: "https://www.pelifarmi.fi/",
    linkText: "Pelifarmi.fi",
  },
  {
    activity: "Käy lenkillä: Tässä hyviä juoksulenkkejä: ",
    tags: ["liikunta", "ulkona", "yksinäinen"],
    link: "https://www.myhelsinki.fi/fi/n%C3%A4e-ja-koe/aktiviteetit/helsingin-suosituimmat-lenkkipolut",
    linkText: "myHelsinki.fi",
  },
  {
    activity: "Tee museokierros! Tutustu lisää osoitteessa: ",
    tags: ["sisätilat"],
    link: "https://www.myhelsinki.fi/fi/n%C3%A4e-ja-koe/n%C3%A4ht%C3%A4vyydet/ilmaismuseoita-helsingiss%C3%A4",
    linkText: "myHelsinki.fi",
  },
  {
    activity: "Käy maalauskurssilla! Tutustu lisää osoitteessa: ",
    tags: ["käsityöt", "sosiaalinen"],
    link: "https://www.nuoritaide.fi/",
    linkText: "nuoritaide.fi",
  },
  {
    activity: "Testaa liikuntakurssit! Tutustu lisää osoitteessa: ",
    tags: ["liikunta", "sosiaalinen"],
    link: "https://liikunta.hel.fi/fi/pages/ohjattu-liikunta",
    linkText: "liikunta.hel.fi",
  },
];

export default function Quiz() {
  // keeps track of the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // state to show the answers when the quiz is finished
  const [showAnswers, setShowAnswers] = useState(false);
  //
  const [answers, setAnswers] = useState([]);

  const [activityPoints, setActivityPoints] = useState(activities.map(() => 0));
  const handleAnswerOptionClick = (tags) => {
    setAnswers([...answers, ...tags]);

    activities.forEach((activity, index) => {
      if (tags.some((tag) => activity.tags.includes(tag))) {
        setActivityPoints((prevPoints) => {
          const newPoints = [...prevPoints];
          newPoints[index]++;
          return newPoints;
        });
      }
    });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowAnswers(true);
    }
  };

  return (
    <div className="quiz">
      {showAnswers ? (
        <div className="answer-section">
          <h1 id="answer-header">
            Tässä hyviä kolmansia tiloja perustuen vastauksiisi
          </h1>
          {/* Sort activities based on points */}
          {activityPoints
            .map((points, index) => ({ index, points }))
            .sort((a, b) => b.points - a.points)
            .slice(0, 3) // Show only top 3 activities
            .map(({ index }) => (
              <div className="answerRow" key={index}>
                <hr />
                <p key={index}>{activities[index].activity}</p>
                <a className="quiz-link" href={activities[index].link}>
                  {activities[index].linkText}
                </a>
              </div>
            ))}
          <hr />
          <button
            onClick={() => {
              setShowAnswers(false);
              setCurrentQuestion(0);
              setAnswers([]);
              setActivityPoints(activities.map(() => 0));
            }}
          >
            Tee testi uudestaan
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Kysymys {currentQuestion + 1}</span>/{questions.length}:
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="button-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                key={answerOption.text}
                onClick={() => handleAnswerOptionClick(answerOption.tags)}
              >
                {answerOption.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

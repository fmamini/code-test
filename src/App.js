import React, { Component } from "react";
import quizQuestions from "./api/quizQuestions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: 0,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: [],
      showReportsQuestion: false
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  componentDidMount() {
    const AnswerOptions = quizQuestions.map((question) =>
      question.answers
    );
    var index;
    let questionItems = localStorage.getItem('mytest2');
    let allQuestionItems = JSON.parse(localStorage.getItem('mytest2'))
    if (typeof questionItems === "undefined" || questionItems === null) {
      index = 0;
      this.setState({
        question: quizQuestions[index].question,
        answerOptions: AnswerOptions[index],
        questionId: index,
      });
    } else {
      let allQuestionItemsLen = allQuestionItems.length
      index = allQuestionItemsLen
      if (allQuestionItemsLen >= quizQuestions.length) {
        setTimeout(() => this.setReports(), 300);
      }
      else {
        this.setState({
          question: quizQuestions[index].question,
          answerOptions: AnswerOptions[index],
          questionId: index,
        });
      }
    }
  }
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    const { questionId, question } = this.state
    this.setQuestionAnswer(questionId, question, event.currentTarget.value)
    if (this.state.questionId < quizQuestions.length - 1) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setReports(), 300);
    }
  }
  setQuestionAnswer(idItem, titleQuestion, answerItem) {
    const result = {
      idQuestion: idItem,
      titleQuestion: titleQuestion,
      questionAns: answerItem
    }
    let questionItems = localStorage.getItem('mytest2');
    let allQuestionItems = [];
    if (typeof questionItems === 'undefined' || questionItems === null) {
    }
    else {
      allQuestionItems = JSON.parse(localStorage.getItem('mytest2'))
    }
    allQuestionItems.push(result);
    localStorage.setItem('mytest2', JSON.stringify(allQuestionItems))
  }
  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }
  setNextQuestion() {
    const questionId = this.state.questionId + 1;
    this.setState({
      questionId: questionId,
      question: quizQuestions[questionId].question,
      answerOptions: quizQuestions[questionId].answers,
      answer: "",
    });
  }
  setReports() {
    const allData = JSON.parse(localStorage.getItem('mytest2'));
    this.setState({ result: allData })
    this.setState({ showReportsQuestion: true })
  }
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  renderResult() {
    return <Result quizResult={this.state.result} />;
  }
  render() {
    return (
      <div className="App">
        {this.state.showReportsQuestion ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}
export default App;

import {LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
  selected = {}           // storing answers
  correctAnswers = 0 // to show the number correct answers  result
  isSubmitted = false // show the  result 
  myQuestions = [
    {
      id: "Question1",
      question:"which one of the following is not a template loop",
      answers:{
        a:"for:each",
        b:"iterator"
      }
      correctAnswer: "c"
    },
    {
      id: "Question2",
      question:"which one of the file is invalid in LWC component folder",
      answers:{
        a:"svg",
        b:"apex"
      }
      correctAnswer: "b"
    },
  ]
  // used for disabling submit button
  get allNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length)
  }
  // for applying dynamic styling to our result
  get isScoredFull(){
    return slds-text-heading_large ${if this.myQuestions.length === this.correctAnsers ?           'slds-text-color_success' : 'slds-text-color_ERROR'}
  }
  // changehandler gets called on every click on the options
  changeHandler(event){
    console.log("name" , event.target.name)
    console.log("value" , event.target.value)
    const {name, value} = event.target  // targeting using short cut 
    this.selected={...this.selected, [name]:value} // name = question , value is a , b 
    // this.selected={"question1":"a"}
  }

  // form Submit handler 
  submitHandler(event){
    event.preventDefault()
    // this.selected = {"Question1":"a", "Question2":"b", "Question3":"c"}
    let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
    this.correctAnsers = correct.length
    this.isSubmitted = true 
    console.log("this.correctAnswers", this.correctAnsers)

  }

  // form reste handler
  resetHandler()
    {
      this.selected = {}
      this.correctAnswers = 0
      this.isSubmitted = false

  }
}
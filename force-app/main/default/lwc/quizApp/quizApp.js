import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {}; // for storing answers
    correctAnswers = 0; // to show the result
    isSubmitted = false;
    myQuestions = [
        {
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invalid in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]

    get allNotSelected()
    {
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }
    get isScoredFull()
    {
        return `slds-text-heading_large ${this.correctAnswers===this.myQuestions.length?'slds-text-color_success':'slds-text-color_error'}`;
    }
    changeHandler(event)
    {
        console.log('Name',event.target.name);
        console.log('Value',event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        this.selected = {...this.selected,[name]:value};
        console.log('selected',Object.keys(this.selected).length);
    }
    submitHandler(event)
    {
       event.preventDefault();
       let correct =  this.myQuestions.filter((item)=>{
            return item.correctAnswer === this.selected[item.id];
        });
        console.log(correct.length);
        this.correctAnswers = correct.length;
        console.log(this.correctAnswers);
        this.isSubmitted = true;
    }
    resetHandler()
    {
        this.selected ={};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
}

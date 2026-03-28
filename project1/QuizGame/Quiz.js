let questionBook=[
    {
        id:"1",
        question:"What is the full-form of JSON",
        option:[
            " 1) Javascript Object Notation",
            "2) javascript object name",
            " 3) javascript object number",
            " 4) javascript object null"
        ],
        correctAnswer:"Javascript Object Notation"
   },
   {
       id:"2",
       question:"What is the full-form of HTML",
       option:[
           " 1) HyperText Markup Language",
            "2) HyperText Markup Level",
            " 3) HyperTest Markup Language",
            " 4) HyperTest Markup Level"
       ],
       correctAnswer:"HyperText Markup Language"
    },
     {
        id:"3",
        question:"What is the full-form of CSS",
        option:[
            " 1) Cascading Style Sheet",
            "2) Cascading Style Sheep",
            " 3) Cascading Style Shirt",
            " 4) Cascading Style Short"
        ],
        correctAnswer:"Cascading Style Sheet"

     },
     {
        id:"4",
        question:"What is the full-form of API",
        option:[
            " 1) Application Programming Interface",
            "2)  Application Programming Interference",
            "3)  Application Programming Internet",
            " 4) Application Programming Internal"
        ],
        correctAnswer:"Application Programming Interface"
    },
{
        id:"5",
        question:"What is the full-form of SQL",
        option:[
            " 1) Structured Query Language",
            "2) Structured Question Language",
            "3)  Structured Query Level",
            "4)  Structured Question Level"
        ],
        correctAnswer:"Structured Query Language"

}]

let questionElement=document.getElementById("Question");
let optionElement=document.getElementById("Option");
let scoreElement=document.getElementById("Score");
let currentQuestion=1;
let score=0;
// console.log(questionBook[currentQuestion].question)
function displayQuestion(){
    let { question,option,correctAnswer}=questionBook[currentQuestion]
    console.log(question)
    questionElement.textContent=question;
    option.map((opt)=>{
        let btn=document.createElement("button");
        btn.setAttribute("id","btn")
        btn.textContent=opt;
        optionElement.append(btn)
    })
}
displayQuestion();

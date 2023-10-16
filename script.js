const quizData = [
    {
        question: "في أي عام تأسس الزعيم ؟",
        a: "1960",
        b: "1957",
        c: "1950",
        correct: "b",
    },
    {
        question: " من هو هدّاف الهلال في آسيا ؟ ",
        a: "بافيتمبي غوميز ",
        b: "ياسر القحطاني ",
        c: "سالم الدوسري ",
        correct: "a",
    },
    {
        question: "هدف شعرة ياسر الشهير كان ضد أي نادي ؟ ",
        a: "الأهلي ",
        b: "النصر ",
        c: "الإتحاد ",
        correct: "c",
    },
    {
        question: "مباراة السوبر بين النصر والهلال 2015 كانت في مدينة ؟ ",
        a: "الرياض ",
        b: "جده ",
        c: "لندن ",
        correct: "c",
    },
    {
        question: "كم عدد بطولات الهلال الرسمية ؟ ",
        a: "66",
        b: "71",
        c: "57",
        correct: "a",
    },
    {
        question: "من هو هدّاف الهلال في كأس العالم للأندية 2023 ؟ ",
        a: "سالم الدوسري ",
        b: "لوسيانو فييتو ",
        c: "موسى ماريغا ",
        correct: "b",
    },
    {
        question: "مسجل الهدف الوحيد في مباراة ذهاب نهائي آسيا 2019 ؟ ",
        a: "بافيتمبي غوميز ",
        b: "اندري كاريلو ",
        c: "سيبا جيوفينكو ",
        correct: "b",
    },
    {
        question: "لاعب أنتقل من نادي ديبورتيفو لاكورونيا الى الهلال ؟ ",
        a: "ويليهامسون ",
        b: "ميرل رادوي ",
        c: "تياغو نيفيز ",
        correct: "a",
    },
    {
        question: " من هو الهدّاف التاريخي لنادي الهلال ؟ ",
        a: "يوسف الثنيان ",
        b: "سامي الجابر ",
        c: "ياسر القحطاني ",
        correct: "b",
    },
    {
        question: "هدف جحفلي الشهير 119 في أي عام  ؟ ",
        a: "2015",
        b: "2017",
        c: "2019",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
            
           if(score==10){
            quiz.innerHTML = `
           <h2 class="font-bold text-blue-950 py-2 text-center pt-10"> جاوبت على ${score} أسئلة صحيحة</h2> 
            <h2 class="font-semibold text-blue-950 py-3 text-center "> مستوى هلاليتك صنديدي , تستحق لقب الطاقية العظمى </h2> `
           }
            if( (score==9) || (score==8) || (score==7) ){
            quiz.innerHTML = `
           <h2 class="font-bold text-blue-950 py-2 text-center pt-10"> جاوبت على ${score} أسئلة صحيحة</h2> 
            <h2 class="font-semibold text-blue-950 py-3 text-center "> مستوى هلاليتك عالي , شقردي أصيل </h2> `

           }
            if( (score==6) || (score==5) || (score==4) ){
            quiz.innerHTML = `
           <h2 class="font-bold text-blue-950 py-2 text-center pt-10"> جاوبت على ${score} أسئلة صحيحة</h2> 
            <h2 class="font-semibold text-blue-950 py-3 text-center "> مستوى هلاليتك متوسط , يجي منك </h2> `

           }
            if( (score==3) || (score==2) || (score==1) || (score==0)){
            quiz.innerHTML = `
           <h2 class="font-bold text-blue-950 py-2 text-center pt-10"> جاوبت على ${score} أسئلة صحيحة</h2> 
            <h2 class="font-semibold text-blue-950 py-3 text-center ">  مستوى هلاليتك منخفض , شكلك نصراوي &#128518;</h2> `

           }
       }
    }  
})

{/* <button onclick="location.reload()"></button> */}
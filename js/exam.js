/* ==========================================================
   Django Certification Examination System
   FINAL exam.js
========================================================== */

let currentQuestion = 0;
let userAnswers = {};
let violations = 0;
let examSubmitted = false;
let timerInterval = null;
let totalSeconds = 0;
let candidate = {};
let antiCheatEnabled = false;
let hasEnteredFullscreen = false;

/* ==========================================================
   INITIALIZATION
========================================================== */

window.onload = function () {

    userAnswers = {};

    localStorage.removeItem("answers");

};

/* ==========================================================
   START EXAM
========================================================== */

function startExam() {

    userAnswers = {};

    localStorage.removeItem("answers");

    const name =
        document.getElementById("candidateName").value.trim();

    const email =
        document.getElementById("candidateEmail").value.trim();

    const phone =
        document.getElementById("candidatePhone").value.trim();

    if (!name || !email) {

        alert("Please complete registration.");

        return;
    }

    candidate = {
        name,
        email,
        phone
    };

    localStorage.setItem(
        "candidate",
        JSON.stringify(candidate)
    );

    totalSeconds =
        questions.length * 60;

    document.getElementById(
        "registrationScreen"
    ).style.display = "none";

    document.getElementById(
        "examScreen"
    ).style.display = "block";

    generatePalette();

    loadQuestion();

    enableAntiCheat();

    enterFullscreen();

    startTimer();

}

/* ==========================================================
   QUESTION SHUFFLE
========================================================== */

function shuffleQuestions() {

    // Disable randomization
    // Keep question order same as questions.js

    return;

}

/* ==========================================================
   FULLSCREEN
========================================================== */

function enterFullscreen() {

    const elem = document.documentElement;

    if (elem.requestFullscreen) {

        elem.requestFullscreen().catch(() => {

            alert(
                "Fullscreen could not be started. Please allow fullscreen and start the exam again."
            );

        });

    } else {

        alert(
            "Fullscreen is not supported by this browser."
        );

    }

}

/* ==========================================================
   ANTI CHEAT
========================================================== */

function enableAntiCheat() {

    if (antiCheatEnabled) {

        return;

    }

    antiCheatEnabled = true;

    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.hidden &&
                !examSubmitted
            ) {

                violations++;

                updateViolationUI();

                if (violations === 1) {

                    alert(
                        "Warning: Tab switching is not allowed. One more violation will end the exam."
                    );

                }

                if (violations >= 2) {

                    alert(
                        "You violated the exam rules twice. The exam will now be submitted automatically."
                    );

                    submitExam();

                }

            }

        }
    );

    document.addEventListener(
        "fullscreenchange",
        function () {

            if (
                document.fullscreenElement
            ) {

                hasEnteredFullscreen = true;

                return;

            }

            if (
                hasEnteredFullscreen &&
                !examSubmitted
            ) {

                violations++;

                updateViolationUI();

                alert(
                    "Fullscreen violation detected. The exam will now be submitted automatically."
                );

                submitExam();

            }

        }
    );

}

/* ==========================================================
   VIOLATION UI
========================================================== */

function updateViolationUI() {

    document.getElementById(
        "violationCount"
    ).innerText = violations;

}

/* ==========================================================
   TIMER
========================================================== */

function startTimer() {

    clearInterval(
        timerInterval
    );

    updateTimerUI();

    timerInterval = setInterval(() => {

        totalSeconds--;

        updateTimerUI();

        if (totalSeconds <= 0) {

            clearInterval(
                timerInterval
            );

            alert(
                "Time is over. Exam submitted automatically."
            );

            submitExam();

        }

    }, 1000);

}

function updateTimerUI() {

    const timer =
        document.getElementById(
            "timer"
        );

    if (!timer) {

        return;

    }

    const mins =
        Math.floor(
            totalSeconds / 60
        );

    const secs =
        totalSeconds % 60;

    timer.innerText =

        String(mins).padStart(2, "0")
        +
        ":"
        +
        String(secs).padStart(2, "0");

}

/* ==========================================================
   QUESTION PALETTE
========================================================== */

function generatePalette() {

    const palette =
        document.getElementById(
            "questionPalette"
        );

    palette.innerHTML = "";

    questions.forEach((q, index) => {

        const btn =
            document.createElement(
                "button"
            );

        btn.className =
            "palette-btn palette-unanswered";

        btn.id =
            "palette_" + index;

        btn.innerText =
            index + 1;

        btn.onclick = () => {

            currentQuestion = index;

            loadQuestion();

        };

        palette.appendChild(btn);

    });

}

/* ==========================================================
   LOAD QUESTION
========================================================== */

function loadQuestion() {

    const q =
        questions[currentQuestion];

    document.getElementById(
        "questionNumber"
    ).innerText =
        currentQuestion + 1;

    let html = `

        <h5 class="question-title">

            ${q.question}

        </h5>

        <hr>

    `;

    q.options.forEach(opt => {

        const checked =
            userAnswers[q.id] === opt
            ? "checked"
            : "";

        html += `

        <div class="form-check">

            <input
                class="form-check-input"
                type="radio"
                name="answer"
                value="${opt}"
                ${checked}
                onchange="saveAnswer(${q.id}, '${opt}')">

            <label
                class="form-check-label">

                ${opt}

            </label>

        </div>

        `;

    });

    document.getElementById(
        "questionContainer"
    ).innerHTML = html;

    updateProgress();

    updatePalette();

}

/* ==========================================================
   SAVE ANSWER
========================================================== */

function saveAnswer(id, value) {

    userAnswers[id] = value;

    updatePalette();

}

/* ==========================================================
   PALETTE UPDATE
========================================================== */

function updatePalette() {

    questions.forEach((q, index) => {

        const btn =
            document.getElementById(
                "palette_" + index
            );

        if (!btn) return;

        btn.className =
            "palette-btn";

        if (
            userAnswers[q.id]
        ) {

            btn.classList.add(
                "palette-answered"
            );

        } else {

            btn.classList.add(
                "palette-unanswered"
            );

        }

        if (
            index === currentQuestion
        ) {

            btn.classList.add(
                "palette-current"
            );

        }

    });

}

/* ==========================================================
   PROGRESS
========================================================== */

function updateProgress() {

    const percent =
        Math.round(
            (
                (currentQuestion + 1)
                /
                questions.length
            ) * 100
        );

    document.getElementById(
        "progressBar"
    ).style.width =
        percent + "%";

    document.getElementById(
        "progressText"
    ).innerText =
        percent + "%";

}

/* ==========================================================
   NAVIGATION
========================================================== */

function nextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    }

}

function previousQuestion() {

    if (
        currentQuestion > 0
    ) {

        currentQuestion--;

        loadQuestion();

    }

}

/* ==========================================================
   SUBMIT EXAM
========================================================== */

function submitExam() {

    if (examSubmitted)
        return;

    examSubmitted = true;

    clearInterval(
        timerInterval
    );

    localStorage.removeItem(
        "remainingTime"
    );

    localStorage.removeItem(
        "answers"
    );

    calculateResult();

}

/* ==========================================================
   RESULT CALCULATION
========================================================== */

function calculateResult() {

    let score = 0;

    let reviewHTML = "";

    questions.forEach(q => {

        const userAns =
            userAnswers[q.id];

        const correct =
            q.answer;

        const isCorrect =
            userAns === correct;

        if (isCorrect)
            score++;

        reviewHTML += `

        <div class="
            review-question
            ${isCorrect
                ? 'review-correct'
                : 'review-wrong'}">

            <strong>

                ${q.question}

            </strong>

            <div class="review-answer">

                Your Answer:
                ${userAns || "Not Answered"}

                <br>

                Correct Answer:
                ${correct}

            </div>

        </div>

        `;

    });

    const percentage =
        (
            score /
            questions.length
        ) * 100;

    localStorage.setItem(
        "finalScore",
        score
    );

    localStorage.setItem(
        "violations",
        violations
    );

    showResultDashboard(
        score,
        percentage,
        reviewHTML
    );

}

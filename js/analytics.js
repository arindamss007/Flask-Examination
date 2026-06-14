/* ==========================================================
   Django Certification Examination System
   analytics.js
========================================================== */

let analyticsChart = null;

/* ==========================================================
   SHOW ANALYTICS
========================================================== */

function showAnalytics() {

    const analytics =
        calculateAnalytics();

    updateAnalyticsCards(
        analytics
    );

    renderAnalyticsChart(
        analytics
    );

    const modal =
        new bootstrap.Modal(
            document.getElementById(
                "analyticsModal"
            )
        );

    modal.show();

}

/* ==========================================================
   CALCULATE ANALYTICS
========================================================== */

function calculateAnalytics() {

    let attempted = 0;

    let correct = 0;

    let incorrect = 0;

    let unanswered = 0;

    questions.forEach(q => {

        const answer =
            userAnswers[q.id];

        if (
            answer !== undefined
        ) {

            attempted++;

            if (
                answer === q.answer
            ) {

                correct++;

            }
            else {

                incorrect++;

            }

        }
        else {

            unanswered++;

        }

    });

    const percentage =
        (
            correct /
            questions.length
        ) * 100;

    return {

        totalQuestions:
            questions.length,

        attempted,

        correct,

        incorrect,

        unanswered,

        percentage,

        violations

    };

}

/* ==========================================================
   UPDATE ANALYTICS CARDS
========================================================== */

function updateAnalyticsCards(
    analytics
) {

    document.getElementById(
        "attemptedCount"
    ).innerText =
        analytics.attempted;

    document.getElementById(
        "remainingCount"
    ).innerText =
        analytics.unanswered;

    document.getElementById(
        "reviewCount"
    ).innerText =
        analytics.correct;

    document.getElementById(
        "violationAnalytics"
    ).innerText =
        analytics.violations;

}

/* ==========================================================
   CHART RENDERING
========================================================== */

function renderAnalyticsChart(
    analytics
) {

    const canvas =
        document.getElementById(
            "analyticsChart"
        );

    if (
        analyticsChart
    ) {

        analyticsChart.destroy();

    }

    analyticsChart =
        new Chart(
            canvas,
            {

                type: 'doughnut',

                data: {

                    labels: [

                        'Correct',

                        'Incorrect',

                        'Unanswered'

                    ],

                    datasets: [

                        {

                            data: [

                                analytics.correct,

                                analytics.incorrect,

                                analytics.unanswered

                            ],

                            backgroundColor: [

                                '#198754',

                                '#dc3545',

                                '#ffc107'

                            ],

                            borderWidth: 2

                        }

                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {

                            position: 'bottom'

                        }

                    }

                }

            }

        );

}

/* ==========================================================
   RESULT ANALYTICS
========================================================== */

function generateResultAnalytics() {

    const analytics =
        calculateAnalytics();

    const grade =
        getGrade(
            analytics.percentage
        );

    return `

        <div class="container-fluid">

            <div class="row">

                <div class="col-md-6">

                    <table class="table table-bordered">

                        <tr>
                            <th>Total Questions</th>
                            <td>
                                ${analytics.totalQuestions}
                            </td>
                        </tr>

                        <tr>
                            <th>Attempted</th>
                            <td>
                                ${analytics.attempted}
                            </td>
                        </tr>

                        <tr>
                            <th>Correct</th>
                            <td>
                                ${analytics.correct}
                            </td>
                        </tr>

                        <tr>
                            <th>Incorrect</th>
                            <td>
                                ${analytics.incorrect}
                            </td>
                        </tr>

                        <tr>
                            <th>Unanswered</th>
                            <td>
                                ${analytics.unanswered}
                            </td>
                        </tr>

                        <tr>
                            <th>Percentage</th>
                            <td>
                                ${analytics.percentage.toFixed(2)}%
                            </td>
                        </tr>

                        <tr>
                            <th>Grade</th>
                            <td>
                                ${grade}
                            </td>
                        </tr>

                        <tr>
                            <th>Violations</th>
                            <td>
                                ${analytics.violations}
                            </td>
                        </tr>

                    </table>

                </div>

            </div>

        </div>

    `;

}

/* ==========================================================
   GRADE CALCULATION
========================================================== */

function getGrade(
    percentage
) {

    if (
        percentage >= 90
    ) {
        return "A+";
    }

    if (
        percentage >= 80
    ) {
        return "A";
    }

    if (
        percentage >= 70
    ) {
        return "B";
    }

    if (
        percentage >= 60
    ) {
        return "C";
    }

    if (
        percentage >= 40
    ) {
        return "D";
    }

    return "F";

}

/* ==========================================================
   PERFORMANCE STATUS
========================================================== */

function getPerformanceStatus(
    percentage
) {

    if (
        percentage >= 80
    ) {

        return "Excellent";

    }

    if (
        percentage >= 60
    ) {

        return "Good";

    }

    if (
        percentage >= 40
    ) {

        return "Average";

    }

    return "Needs Improvement";

}

/* ==========================================================
   EXAM SUMMARY OBJECT
========================================================== */

function getExamSummary() {

    const analytics =
        calculateAnalytics();

    return {

        candidate:
            JSON.parse(
                localStorage.getItem(
                    "candidate"
                ) || "{}"
            ),

        score:
            analytics.correct,

        total:
            analytics.totalQuestions,

        percentage:
            analytics.percentage,

        grade:
            getGrade(
                analytics.percentage
            ),

        status:
            getPerformanceStatus(
                analytics.percentage
            ),

        violations:
            analytics.violations

    };

}

/* ==========================================================
   EXPORT ANALYTICS
========================================================== */

function exportAnalytics() {

    const summary =
        getExamSummary();

    console.table(
        summary
    );

    return summary;

}
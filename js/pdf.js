/* ==========================================================
   Flask Certification Examination System
   pdf.js
========================================================== */

async function downloadPDF() {

    if (!window.jspdf) {

        alert(
            "jsPDF library not loaded."
        );

        return;
    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF(
        "p",
        "mm",
        "a4"
    );

    const pageHeight =
        doc.internal.pageSize.height;

    const pageWidth =
        doc.internal.pageSize.width;

    let y = 20;

    /* ======================================================
       HELPER
    ====================================================== */

    function addLine(text, size = 11) {

        doc.setFontSize(size);

        const split =
            doc.splitTextToSize(
                text,
                180
            );

        split.forEach(line => {

            if (y > pageHeight - 15) {

                doc.addPage();

                y = 20;

            }

            doc.text(
                line,
                15,
                y
            );

            y += 7;

        });

    }

    /* ======================================================
       DATA
    ====================================================== */

    const score =
        parseInt(
            localStorage.getItem(
                "finalScore"
            ) || 0
        );

    const violations =
        parseInt(
            localStorage.getItem(
                "violations"
            ) || 0
        );

    const percentage =
        (
            score /
            questions.length
        ) * 100;

    const candidateData =
        JSON.parse(
            localStorage.getItem(
                "candidate"
            ) || "{}"
        );

    /* ======================================================
       HEADER
    ====================================================== */

    doc.setFontSize(20);

    doc.text(
        "FLASK CERTIFICATION EXAMINATION",
        15,
        y
    );

    y += 12;

    doc.setFontSize(12);

    doc.text(
        "Result Report",
        15,
        y
    );

    y += 15;

    doc.line(
        15,
        y,
        pageWidth - 15,
        y
    );

    y += 10;

    /* ======================================================
       CANDIDATE INFO
    ====================================================== */

    addLine(
        `Candidate Name : ${candidateData.name || '-'}`
    );

    addLine(
        `Email : ${candidateData.email || '-'}`
    );

    addLine(
        `Phone : ${candidateData.phone || '-'}`
    );

    y += 5;

    /* ======================================================
       RESULT SUMMARY
    ====================================================== */

    doc.setFontSize(15);

    doc.text(
        "Result Summary",
        15,
        y
    );

    y += 10;

    addLine(
        `Total Questions : ${questions.length}`
    );

    addLine(
        `Score Obtained : ${score}`
    );

    addLine(
        `Percentage : ${percentage.toFixed(2)}%`
    );

    addLine(
        `Violations : ${violations}`
    );

    addLine(
        `Result : ${
            percentage >= 40
            ? "PASS"
            : "FAIL"
        }`
    );

    y += 5;

    doc.line(
        15,
        y,
        pageWidth - 15,
        y
    );

    y += 10;

    /* ======================================================
       ANSWER REVIEW
    ====================================================== */

    doc.setFontSize(15);

    doc.text(
        "Question Review",
        15,
        y
    );

    y += 10;

    questions.forEach((q, index) => {

        const answerMap =
            JSON.parse(
                localStorage.getItem(
                    "answers"
                ) || "{}"
            );

        const userAnswer =
            answerMap[q.id]
            || "Not Answered";

        const correctAnswer =
            q.answer;

        const status =
            userAnswer === correctAnswer
            ? "Correct"
            : "Wrong";

        addLine(
            `${index + 1}. ${q.question}`,
            10
        );

        addLine(
            `Your Answer : ${userAnswer}`,
            9
        );

        addLine(
            `Correct Answer : ${correctAnswer}`,
            9
        );

        addLine(
            `Status : ${status}`,
            9
        );

        y += 4;

    });

    /* ======================================================
       FOOTER
    ====================================================== */

    const pages =
        doc.internal.getNumberOfPages();

    for (
        let i = 1;
        i <= pages;
        i++
    ) {

        doc.setPage(i);

        doc.setFontSize(9);

        doc.text(
            `Page ${i} of ${pages}`,
            pageWidth - 40,
            pageHeight - 10
        );

        doc.text(
            "Generated by Flask Examination System",
            15,
            pageHeight - 10
        );

    }

    /* ======================================================
       DOWNLOAD
    ====================================================== */

    const filename =
        `${candidateData.name || 'Candidate'}_Result.pdf`;

    doc.save(
        filename
    );

}
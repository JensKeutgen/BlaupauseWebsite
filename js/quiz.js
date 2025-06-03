// js/quiz.js

document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const dataScript = document.getElementById('quiz-data');

    if (!quizContainer || !dataScript) {
        return;
    }

    let quizData;
    try {
        quizData = JSON.parse(dataScript.textContent);
    } catch (e) {
        console.error('Quiz data is not valid JSON');
        return;
    }

    function renderQuiz() {
        const htmlParts = [];
        quizData.questions.forEach((q, qi) => {
            htmlParts.push(`<div class="quiz-question">`);
            htmlParts.push(`<p>${q.question}</p>`);
            q.options.forEach((opt, oi) => {
                const id = `q${qi}_o${oi}`;
                htmlParts.push(
                    `<label for="${id}"><input type="radio" id="${id}" name="q${qi}" value="${oi}"> ${opt}</label>`
                );
            });
            htmlParts.push('</div>');
        });
        htmlParts.push('<button id="quiz-submit">Antworten prüfen</button>');
        htmlParts.push('<div id="quiz-result" class="quiz-result"></div>');
        quizContainer.innerHTML = htmlParts.join('');
    }

    function evaluateQuiz() {
        let score = 0;
        quizData.questions.forEach((q, qi) => {
            const selected = quizContainer.querySelector(`input[name="q${qi}"]:checked`);
            if (selected && parseInt(selected.value, 10) === q.correct) {
                score++;
            }
        });
        const result = `${score} / ${quizData.questions.length} korrekt`;
        document.getElementById('quiz-result').textContent = result;
    }

    renderQuiz();
    const submitBtn = document.getElementById('quiz-submit');
    submitBtn.addEventListener('click', evaluateQuiz);
});

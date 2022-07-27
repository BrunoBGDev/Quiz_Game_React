import React from "react";

const QuizContainer = () => {
    return (
    <div class="quiz-container" id="quiz">
        <div class="quiz-header">
            <h2 id="question">O quiz está carregando...</h2>
            <ul>
                <li>
                    <input type="radio" name="anwser" id="a" class="anwser" />
                    <label for="a" id="a_text">Anwser...</label>
                </li>
                <li>
                    <input type="radio" name="anwser" id="b" class="anwser" />
                    <label for="b" id="b_text">Anwser...</label>
                </li>
                <li>
                    <input type="radio" name="anwser" id="c" class="anwser" />
                    <label for="c" id="c_text">Anwser...</label>
                </li>
                <li>
                    <input type="radio" name="anwser" id="d" class="anwser" />
                    <label for="d" id="d_text">Anwser...</label>
                </li>
            </ul>
        </div>
        <button id="submit">Submit</button>
    </div>
    );
};

export default QuizContainer;

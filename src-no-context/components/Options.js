function Options({ questions, dispatch, answer }) {
    const hasAnswer = answer !== null;
    return (
        <div className="options">
            {questions.options.map((option, index) => <button key={option} disabled={hasAnswer} className={`btn btn-option ${index === answer ? 'answer' : ''} ${hasAnswer ? index === questions.correctOption ? 'correct' : 'wrong' : ''}`} onClick={() => { dispatch({ type: 'newAnswer', payload: index }) }}>{option}</button>)
            }
        </div >
    )
}

export default Options

import deleteIcon from "../assets/delete.png";

export default function AnswersList({
	title,
	list,
	questionType,
	setSelectedAnswers,
}: AnswersListProps) {
	const handleAnswerSelect: HandleAnswerSelect = (e, index) => {
		if (questionType === "radio") {
			setSelectedAnswers([index]);
			return;
		}

		// If the selected answer is unchecked, it indicates that user has deselected it,
		// and it will be removed from the selectedAnswers array. Otherwise,// it will be added to the array.
		setSelectedAnswers((prevSelectedAnswers) =>
			!e.target.checked
				? prevSelectedAnswers.filter((num) => num !== index)
				: [...prevSelectedAnswers, index]
		);
	};

	return (
		<>
			{list.map((answer, index) => (
				<div key={index} className="answer">
					<input
						name={questionType === "radio" ? title || "answer" : answer}
						type={questionType}
						id={answer}
						value={answer}
						onChange={(e) => handleAnswerSelect(e, index)}
					/>
					<label htmlFor={answer}>{answer}</label>
				</div>
			))}
		</>
	);
}

import { useState } from "react";
import AnswersList from "./AnswersList";
import classes from "./style.module.scss";
import DropDown from "../DropDown";

export default function QuestionForm() {
	const [title, setTitle] = useState("");
	const [answer, setAnswer] = useState("");
	const [answersList, setAnswersList] = useState<string[]>([]);
	const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
	const [questionType, setQuestionType] = useState<QuestionType>("radio");

	const handleTitleInputChange: HandleInputChange = (e) =>
		setTitle(e.target.value);

	const handleAnswerInputChange: HandleInputChange = (e) =>
		setAnswer(e.target.value);

	const handleAnswerAdd = () => {
		setAnswer("");
		if (answersList.includes(answer)) return; // Skip adding the answer if it already exists
		setAnswersList((prev) => [...prev, answer]); // Add the answer to the answers list
	};

	const handleAnswerEnter: HandleAnswerEnter = (e) => {
		if (e.key === "Enter") handleAnswerAdd();
	};

	const handleFormSubmit: HandleFormSubmit = (e) => {
		e.preventDefault();
		const formInfo = {
			questionType,
			title,
			answersList,
			selectedAnswers,
		};

		// Here we can add the function to send the form info to the server or any other action
		console.log(formInfo);

		// Reset Form
		setTitle("");
		setAnswersList([]);
		setSelectedAnswers([]);
	};

	return (
		<div className={classes.question_form}>
			<DropDown
				inputName=""
				defaultValue={{ label: "One Choice", value: "radio" }}
				onSelection={(option) =>
					setQuestionType(option.value as QuestionType)
				}
				options={[
					{ label: "Multi Choice", value: "checkbox" },
					{ label: "One Choice", value: "radio" },
				]}
				Label="Question Type"
			/>
			<input
				type="text"
				placeholder="Question title"
				value={title}
				onChange={handleTitleInputChange}
				className="textInput"
			/>

			<div className="addAnswer" style={{ margin: "10px 0" }}>
				<input
					type="text"
					placeholder="Answer text"
					value={answer}
					onChange={handleAnswerInputChange}
					onKeyDown={handleAnswerEnter}
					className="textInput"
				/>
				<button disabled={!Boolean(answer)} onClick={handleAnswerAdd}>
					Add Answer
				</button>
			</div>

			<form onSubmit={handleFormSubmit}>
				<AnswersList
					questionType={questionType}
					title={title}
					list={answersList}
					setSelectedAnswers={setSelectedAnswers}
				/>

				<button
					type="submit"
					disabled={!Boolean(title) || selectedAnswers.length < 1}
					className="submitButton"
				>
					Submit
				</button>
			</form>
		</div>
	);
}

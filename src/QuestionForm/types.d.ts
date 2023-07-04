type QuestionType = "radio" | "checkbox";

interface AnswersListProps {
	title: string;
	list: string[];
	questionType: QuestionType;
	setSelectedAnswers: (value: React.SetStateAction<number[]>) => void;
}

type HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

type HandleAnswerEnter = (e: React.KeyboardEvent<HTMLInputElement>) => void;

type HandleAnswerSelect = (
	e: React.ChangeEvent<HTMLInputElement>,
	index: number
) => void;

type HandleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => void;

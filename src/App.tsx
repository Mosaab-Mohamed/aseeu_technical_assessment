import DropDown from "./DropDown";
import QuestionForm from "./QuestionForm";
import "./app.scss";

function App() {
	return (
		<div className="App">
			<h1>First Task</h1>
			<DropDown
				inputName="dropdown"
				Label="Country"
				defaultValue={{ label: "England", value: "EN" }}
				options={[
					{ label: "Egypt", value: "EGY" },
					{ label: "American United States", value: "USA" },
					{ label: "France", value: "FR" },
				]}
				onSelection={(option: DropDownOptionProp) => console.log(option)}
				ClassName="dropdown-root"
			/>
			<hr />
			<h1>Second Task</h1>
			<QuestionForm />
		</div>
	);
}

export default App;

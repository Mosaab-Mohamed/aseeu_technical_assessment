import { useState } from "react";
import OptionsList from "./components/OptionsList";
import DropDownButton from "./components/DropDownButton";
import classes from "./style.module.scss";

export default function DropDown({
	Label,
	defaultValue,
	inputName,
	options,
	onSelection,
	ClassName,
}: DropDownProps) {
	const [selectedOption, setSelectedOption] = useState<
		DropDownOptionProp | undefined
	>(defaultValue);
	const [isOpen, setIsOpen] = useState(false);

	const handleSelection = (option: DropDownOptionProp) => {
		setSelectedOption(option);
		onSelection(option);
		setIsOpen(false);
	};

	return (
		<div className={`${classes.dropdown_root} ${ClassName ? ClassName : ""}`}>
			<label className="label">{Label}</label>
			<input type="hidden" name={inputName} value={selectedOption?.value} />

			<DropDownButton
				text={selectedOption?.label}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>

			<OptionsList
				isOpen={isOpen}
				options={options}
				handleSelection={handleSelection}
				selectedOption={selectedOption}
			/>
		</div>
	);
}

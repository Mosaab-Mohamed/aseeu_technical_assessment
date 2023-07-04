interface DropDownOptionProp {
	label: string;
	value: string;
}

interface DropDownProps {
	Label?: string;
	defaultValue?: DropDownOptionProp;
	options: DropDownOptionProp[];
	inputName: string;
	onSelection: (option: DropDownOptionProp) => void;
	ClassName?: string;
}

interface OptionsListProps extends Pick<DropDownProps, "options"> {
	isOpen: boolean;
	selectedOption?: DropDownOptionProp;
	handleSelection: (option: DropDownOptionProp) => void;
}

interface DropDownButtonProps {
	text?: string;
	isOpen: boolean;
	setIsOpen: eact.Dispatch<React.SetStateAction<boolean>>;
}

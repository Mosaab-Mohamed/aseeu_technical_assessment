export default function OptionsList({
	isOpen,
	options,
	handleSelection,
	selectedOption,
}: OptionsListProps) {
	return isOpen ? (
		<ul className="optionsList">
			{options.map((option, index) => (
				<li
					key={index}
					onClick={() => handleSelection(option)}
					className={`option ${
						option.value === selectedOption?.value ? "selected" : ""
					}`}
				>
					{option.label}
				</li>
			))}
		</ul>
	) : null;
}

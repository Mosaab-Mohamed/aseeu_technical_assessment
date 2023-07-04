import arrowDown from "../../assets/arrow-down.png";

export default function DropDownButton({
	text,
	isOpen,
	setIsOpen,
}: DropDownButtonProps) {
	const handleToggling = () => setIsOpen(!isOpen);

	return (
		<div
			className={`toggleButton ${isOpen ? "open" : ""}`}
			onClick={handleToggling}
		>
			<button>{text || "Select..."}</button>
			<img src={arrowDown} alt="arrow-down" className="arrow-icon" />
		</div>
	);
}

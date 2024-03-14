import './ExperienceCard.css'
import {useState} from "react";

export default function ExperienceCard ({date, title, description, hoverEvent, isHovered}) {
	const [selected, setSelected] = useState(false);
	function triggerEvent (value) {
		setSelected(value);
		hoverEvent(value);
	}

	return (
		<>
			<div className={'experience-container' + (isHovered && !selected ? ' disabled' : '') + (selected ? ' selected' : '')}
				onMouseEnter={() => triggerEvent(true)}
			  onMouseLeave={() => triggerEvent(false)}
			>
				<div className='experience-title'>
					<header>{date}</header>
					<span>{title}</span>
				</div>
				<p>
					{description}
				</p>
			</div>
		</>
	)
}
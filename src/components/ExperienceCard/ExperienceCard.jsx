import './ExperienceCard.css'
import {useState} from 'react';
import ArrowUp from "../Icons/ArrowUp/ArrowUp.jsx";

export default function ExperienceCard ({date, title, description, linkToOpen, hoverEvent, isHovered, techStack = []}) {
	const [selected, setSelected] = useState(false);
	function triggerEvent (value) {
		setSelected(value);
		hoverEvent(value);
	}

	function openLink (link) {
		window.open(link, '_blank', 'noopener')
	}

	return (
		<>
			<div className={'experience-container' + (isHovered && !selected ? ' disabled' : '') + (selected ? ' selected' : '')}
				onMouseEnter={() => triggerEvent(true)}
			  onMouseLeave={() => triggerEvent(false)}
			  onClick={() => openLink(linkToOpen)}
			>
				<div className='experience-title'>
					<header>{date}</header>
					<span>{title}</span>
					<ArrowUp />
				</div>
				<p>
					{description}
				</p>
				<div className='tech-container'>
					{techStack.map((tech, key) => {
						return <div className='tech-buble' key={key}>{tech}</div>
					})}
				</div>
			</div>
		</>
	)
}
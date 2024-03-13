import './ExperienceCard.css'

export default function ExperienceCard ({date, title, description, hoverEvent}) {
	return (
		<>
			<div className='experience-container'
				onMouseEnter={() => hoverEvent(true)}
			  onMouseLeave={() => hoverEvent(false)}
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
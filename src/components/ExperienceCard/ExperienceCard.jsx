import './ExperienceCard.css'

export default function ExperienceCard ({date, title, description}) {
	return (
		<>
			<div className='experience-container'>
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
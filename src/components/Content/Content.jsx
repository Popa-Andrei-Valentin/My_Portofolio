import './Content.css'
import { useState } from "react";
import {contentText, projectText} from "../../assets/content-text.js";
import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";

export default function Content () {
	const [isHovered, setIsHovered] = useState(false);
	function enableIsHoveredStyle (value) {
		setIsHovered(value);
	}

	return (
		<>
			<div className='content-container'>
				<div className='about-section'>
					<div className='content-text'>
						<h2>Experience</h2>
						<div className='content-box'>
							<p>Working as a software developer with a focus on the frontend side for <b>two years</b> has been a transformative journey, blending creativity with technical skills. I've navigated through an ever-evolving landscape of web technologies, honing abilities in various modern frameworks such as <b>React</b> and <b>Vue.js</b>.</p>
							{contentText.map((content, key) => {
								return <ExperienceCard
									linkToOpen={content.linkToOpen}
									isHovered={isHovered}
									hoverEvent={enableIsHoveredStyle}
									key={key}
									date={content.date}
									title={content.title}
									description={content.description}
									techStack={content.techStack ? content.techStack : []}
								/>
							})}
						</div>
					</div>
				</div>

				<div className='experience-section'>
					<div className='content-text'>
						<h2 style={{marginBottom: '1em'}}>Projects</h2>
						<div className='content-box'>
							{projectText.map((content, key) => {
								return <ExperienceCard
									linkToOpen={content.linkToOpen}
									isHovered={isHovered}
									hoverEvent={enableIsHoveredStyle}
									key={key * 10}
									title={content.title}
									description={content.description}
									techStack={content.techStack ? content.techStack : []}
								/>
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

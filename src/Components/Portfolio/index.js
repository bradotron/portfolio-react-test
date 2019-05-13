import React from 'react';
import projects from './projects';
import './style.css';

function Portfolio(props) {
	return (
		<section id={props.id}>
			<h2>This is the portfolio form.</h2>
			<div className="projects">
				{projects.map(project => {
					return (
						<div className="card">
							<div className="img-wrapper">
								<img
									src={process.env.PUBLIC_URL + '/images/' + project.image}
									className="img-size"
									alt={project.title}
								/>
							</div>
							<h3>{project.title}</h3>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Portfolio;

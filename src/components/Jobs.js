import Job from "./Job";
const Jobs = (props) => {
	return (
		<div className={props.className}>
			<Job
				className="job red-border"
				title="Full Time Sales Associate - Sydney Boutique"
				contractType="CDI"
				country="Australie"
				city="Sydney"
			/>
			<Job
				className="job green-border"
				title="Agent de Sécurité - Pantin"
				contractType="CDI"
				country="France"
				city="Pantin"
			/>
			<Job
				className="job yellow-border"
				title="Responsable d'Atelier (H/F)"
				contractType="CDI"
				country="France"
				city="Paris"
			/>
			<Job
				className="job blue-border"
				title="Chef de Projets"
				contractType="CDI"
				country="France"
				city="Paris"
			/>
			<Job
				className="job pink-border"
				title="Développeur React.js"
				contractType="CDI"
				country="France"
				city="Paris"
			/>
			<Job
				className="job red-border"
				title="Sales Associate Stockholm"
				contractType="CDI"
				country="Suède"
				city="Stockholm"
			/>
			<Job
				className="job green-border"
				title="Vendeur/se - Crans Montana"
				contractType="CDI"
				country="Suisse"
				city="Crans-Montana"
			/>
			<Job
				className="job yellow-border"
				title="CRM & Data Quality Analyst"
				contractType="CDI"
				country="USA"
				city="New York"
			/>
			<Job
				className="job blue-border"
				title="Infirmier (H/F)
				"
				contractType="CDI"
				country="France"
				city="Pantin"
			/>
		</div>
	);
};

export default Jobs;

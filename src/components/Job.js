const Job = (props) => {
	return (
		<div className={props.className}>
			<div className="title">{props.title}</div>
			<div className="content-bottom">
				<span>{props.contractType}</span> - <span>{props.country}</span>{" "}
				- {props.city}
			</div>
		</div>
	);
};

export default Job;

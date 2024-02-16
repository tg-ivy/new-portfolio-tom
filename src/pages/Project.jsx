


export default function Project(props) {
    return (
        <>
        <div className="project-card">
            <a href={props.deployed}><img className="project-card-image" src={props.screenshot} alt="Screenshot of project" /></a>
            <h3>{props.name}</h3>
            <p><b>GitHub Link: </b> <a href={props.github}>{props.github}</a></p>
            <p><b>Deployment Link: </b> <a href={props.deployed}>{props.deployed}</a></p>
        </div>
        </>
    )
}


function Superheroes(props) {
    return (
        <div className="superhero">
        <h2>{props.name}</h2>
        <div><img src={props.urlPhoto}/></div>
        <div>Вселенная: {props.universe}</div>
        <div>Альтер эго: {props.alterEgo}</div>
        <div>Альтер эго: ${props.occupation}</div>
        <div>Альтер эго: ${props.friends}</div>
        <div>Альтер эго: ${props.superpower}</div>
        <div>Подробнее: ${props.description}</div>
        </div>
        );
}

export default Superheroes;
import './style.css'

//Этот вариант оставила, чтобы был пример с props.свойство

// function Superheroes(props) {
//     return (
//         <div className="superhero">
//         <h2>{props.name}</h2>
//         <div><img src={props.urlPhoto} alt="superhero"/></div>
//         <div><span className="superhero_title">Вселенная:</span> {props.universe}</div>
//         <div><span className="superhero_title">Альтер эго:</span>  {props.alterEgo}</div>
//         <div><span className="superhero_title">Род деятельности:</span>  {props.occupation}</div>
//         <div><span className="superhero_title">Друзья:</span>  {props.friends}</div>
//         <div><span className="superhero_title">Суперсилы:</span>  {props.superpower}</div>
//         <div><span className="superhero_title">Подробнее:</span>  {props.description}</div>
//         </div>
//         );
// }

function Superheroes({name, urlPhoto, universe, alterEgo, occupation, friends, superpower, description}) {
    return (
        <div className="superhero">
        <h2>{name}</h2>
        <div><img src={urlPhoto} alt="superhero"/></div>
        <div><span className="superhero_title">Вселенная:</span> {universe}</div>
        <div><span className="superhero_title">Альтер эго:</span>  {alterEgo}</div>
        <div><span className="superhero_title">Род деятельности:</span>  {occupation}</div>
        <div><span className="superhero_title">Друзья:</span>  {friends}</div>
        <div><span className="superhero_title">Суперсилы:</span>  {superpower}</div>
        <div><span className="superhero_title">Подробнее:</span>  {description}</div>
        </div>
        );
}
export default Superheroes;
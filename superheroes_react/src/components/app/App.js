import '../../style/App.css';
import Superheroes from '../superheroes/superhero_card';
import superheroes from '../../data/data.json'

function App() {
  return (
    <div className="App">{
      superheroes.map((superheroes) =>
      <Superheroes name={superheroes.name} urlPhoto={superheroes.urlPhoto} universe={superheroes.universe} alterEgo={superheroes.alterEgo} occupation={superheroes.occupation} friends={superheroes.friends} superpower={superheroes.superpower} description={superheroes.description} />
    )
    }
    </div>
  );
}

export default App;

import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>TP Hooks React</h1>

      <section>
        <h2>useReducer</h2>
        <Compteur />
      </section>

      <section>
        <h2>useRef</h2>
        <FocusInput />
      </section>

      <section>
        <h2>Rendus</h2>
        <CompteurRendu />
      </section>

      <section>
        <h2>Liste d'articles avec useFetch</h2>
        <ListeArticles />
      </section>

      <section>
        <h2>Timer</h2>
        <Timer />
      </section>
    </div>
  );
}

export default App;
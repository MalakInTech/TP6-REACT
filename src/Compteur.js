import { useReducer } from 'react';

const etatInitial = { valeur: 0 };

function gestionnaire(state, action) {
  switch (action.type) {
    case 'plus':
      return { valeur: state.valeur + 1 };
    case 'moins':
      return { valeur: state.valeur - 1 };
    default:
      return state;
  }
}

function Compteur() {
  const [etat, envoyer] = useReducer(gestionnaire, etatInitial);

  return (
    <div>
      <p>Valeur actuelle : {etat.valeur}</p>
      <button onClick={() => envoyer({ type: 'plus' })}>Ajouter</button>
      <button onClick={() => envoyer({ type: 'moins' })}>Retirer</button>
    </div>
  );
}

export default Compteur;
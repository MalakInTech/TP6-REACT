import { useRef, useEffect } from 'react';

function CompteurRendu() {
  const nbRendus = useRef(0);

  useEffect(() => {
    nbRendus.current += 1;
    console.log(`Rendu numéro : ${nbRendus.current}`);
  });

  return (
    <div>
      <p>Ouvre la console pour voir le nombre de rendus</p>
    </div>
  );
}

export default CompteurRendu;
import { useState, useEffect } from 'react';

function Timer() {
  const [temps, setTemps] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTemps((t) => t + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Temps : {temps} s</p>
      <button onClick={() => setTemps(0)}>Réinitialiser</button>
    </div>
  );
}

export default Timer;
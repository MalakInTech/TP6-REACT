import { useRef } from 'react';

function FocusInput() {
  const champRef = useRef(null);

  const activerFocus = () => {
    champRef.current.focus();
  };

  return (
    <div>
      <input ref={champRef} placeholder="Écris quelque chose..." />
      <button onClick={activerFocus}>Focus sur le champ</button>
    </div>
  );
}

export default FocusInput;
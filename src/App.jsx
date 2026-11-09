import PlayersList from './components/PlayersList';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #0f172a 0%, #14532d 100%)',
        padding: '3rem 1rem',
      }}
    >
      <h1 className="text-center text-white fw-bold mb-2">⚽ Cartes de joueurs FIFA</h1>
      <p className="text-center mb-5" style={{ color: '#cbd5e1' }}>
        Composants React, props déstructurées et valeurs par défaut
      </p>
      <PlayersList />
    </div>
  );
}

export default App;

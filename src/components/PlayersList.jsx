import Player from './Player';
import players from '../players';

// Parcourt le tableau des joueurs et transmet les props à chaque Player
function PlayersList() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {players.map(({ id, ...player }) => (
        <Player key={id} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;

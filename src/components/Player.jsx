// Valeurs par défaut utilisées quand une prop n'est pas transmise
export const defaultPlayerProps = {
  name: 'Joueur inconnu',
  team: 'Sans club',
  nationality: 'Non renseignée',
  jerseyNumber: 0,
  age: 18,
  imageUrl: '/players/default.svg',
};

// Style en ligne (objets JavaScript en camelCase)
const styles = {
  card: {
    width: '16rem',
    borderRadius: '1rem',
    overflow: 'hidden',
    border: 'none',
    boxShadow: '0 0.75rem 1.5rem rgba(15, 23, 42, 0.18)',
  },
  image: {
    height: '14rem',
    objectFit: 'cover',
  },
  number: {
    position: 'absolute',
    top: '0.75rem',
    right: '0.75rem',
    backgroundColor: '#0f172a',
    color: '#facc15',
    fontWeight: 800,
    fontSize: '1.25rem',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid #facc15',
  },
  label: {
    color: '#64748b',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
};

// Composant Player : toutes les props sont déstructurées, avec une valeur par défaut chacune
function Player({
  name = defaultPlayerProps.name,
  team = defaultPlayerProps.team,
  nationality = defaultPlayerProps.nationality,
  jerseyNumber = defaultPlayerProps.jerseyNumber,
  age = defaultPlayerProps.age,
  imageUrl = defaultPlayerProps.imageUrl,
}) {
  return (
    <div className="card h-100" style={styles.card}>
      <div style={{ position: 'relative' }}>
        <img src={imageUrl} alt={name} className="card-img-top" style={styles.image} />
        <span style={styles.number}>{jerseyNumber}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">{name}</h5>
        <ul className="list-unstyled mb-0">
          <li className="d-flex justify-content-between mb-1">
            <span style={styles.label}>Équipe</span>
            <span>{team}</span>
          </li>
          <li className="d-flex justify-content-between mb-1">
            <span style={styles.label}>Nationalité</span>
            <span>{nationality}</span>
          </li>
          <li className="d-flex justify-content-between">
            <span style={styles.label}>Âge</span>
            <span>{age} ans</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Player;

import { Link } from 'react-router-dom';
import MOVIES from '../data';
const FilmListesi = () => (
  <div>
    <h2>Tüm Filmler</h2>
    {MOVIES.map(film => (
      <div key={film.id} className="post-card">
        <h3>{film.title}</h3>
        <Link to={`/film/${film.slug}`} className="read-more">Detayları Gör</Link>
      </div>
    ))}
  </div>
);
export default FilmListesi;
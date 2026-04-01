import { useParams, useNavigate } from 'react-router-dom';
import MOVIES from '../data';

const FilmDetay = () => {
  const { filmSlug } = useParams();
  const navigate = useNavigate();
  const film = MOVIES.find(f => f.slug === filmSlug);

  if (!film) return <h2>Film Bulunamadı!</h2>;

  return (
    <div>
      <button onClick={() => navigate('/filmler')}>← Geri Dön</button>
      <h1 style={{ color: '#a855f7' }}>{film.title}</h1>
      <p>Yönetmen: {film.director} | Puan: {film.point}</p>
      <p>{film.info}</p>
    </div>
  );
};
export default FilmDetay;
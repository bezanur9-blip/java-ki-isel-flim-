import { Link } from 'react-router-dom';
const Anasayfa = () => (
  <div style={{ textAlign: 'center', padding: '3rem' }}>
    <h1>Hoş Geldin!</h1>
    <Link to="/filmler" className="read-more">Filmleri Keşfet →</Link>
  </div>
);
export default Anasayfa;
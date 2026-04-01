import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 0' }}>
      <h1 style={{ fontSize: '5rem', color: '#a855f7', margin: 0 }}>404</h1>
      <h2 style={{ color: '#1e293b' }}>Aradığınız Sayfa Bulunamadı!</h2>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        Görünüşe göre kaybolmuşsunuz. Endişelenmeyin, film rehberimize geri dönebilirsiniz.
      </p>
      <Link 
        to="/" 
        style={{
          backgroundColor: '#a855f7',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default NotFound;
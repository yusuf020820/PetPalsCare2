import React from 'react';
import Navbar from '../Components/Navbar';

const posts = [
  {
    id: 1,
    title: 'Drh. Zahra Salsabila, M.Si',
    href: '#',
    description: 'KEDIRI',
    author: {
      imageUrl: 'https://via.placeholder.com/300', // Ganti dengan URL gambar yang benar
    },
  },
  // More posts...
];

const Example = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.cards}>
          {posts.map((post) => (
            <article key={post.id} style={styles.card}>
              <div style={styles.cardInner}>
                {post.author.imageUrl && (
                  <img
                    src={post.author.imageUrl}
                    alt={post.title}
                    style={styles.image}
                  />
                )}
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>
                    <a href={post.href} style={styles.cardLink}>
                      {post.title}
                    </a>
                  </h3>
                  <p style={styles.cardDescription}>{post.description}</p>
                  <p style={styles.cardDetails}>
                    <span style={styles.boldText}>Nama:</span> {post.title} <br />
                    <span style={styles.boldText}>Region/Wilayah:</span> Kediri <br />
                    <span style={styles.boldText}>Lulusan:</span> Pendidikan Profesi Dokter Hewan, Fakultas Kedokteran Hewan, Universitas Udayana, Bali<br />
                    <span style={styles.boldText}>Lulusan 2:</span> Biologi Reproduksi, Sekolah Pascasarjana, Institut Pertanian Bogor<br />
                    <span style={styles.boldText}>Pengalaman:</span> 5 Tahun <br />
                    <span style={styles.boldText}>Spesialis Hewan:</span> Kucing dan Anjing
                  </p>
                  <div style={styles.buttonGroup}>
                    <button style={styles.button}>Konsultasi</button>
                    <button style={styles.button}>Lokasi Praktik</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const DetailDokterCewe = () => {
  return (
    <>
      <Navbar />
      <Example />
    </>
  );
};

const styles = {
  page: {
    backgroundColor: '#f4f4f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '24px',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px',
    maxWidth: '100%',
    margin: '16px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    marginTop: '16px',
  },
  cardContent: {
    padding: '16px',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.5em',
    margin: '8px 0',
  },
  cardLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
  cardDescription: {
    color: '#ED9455',
    fontSize: '1.25em',
    fontWeight: 'bold',
  },
  cardDetails: {
    color: '#555',
    fontSize: '0.9em',
    lineHeight: '1.6',
    margin: '8px 0',
  },
  boldText: {
    color: '#564741',
    fontWeight: 'bold',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
    marginTop: '16px',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 16px',
    backgroundColor: '#ED9455',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '1em',
  },
  buttonHover: {
    backgroundColor: '#d8854c',
  },
};

export default DetailDokterCewe;

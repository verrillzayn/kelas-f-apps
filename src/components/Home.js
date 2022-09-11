import React from 'react';
import Card from './CardLink';

const Home = () => {
  return (
    <>
      <div className="container-content-2">
        <h1 className="layanan-judul">Layanan</h1>
      </div>
      <div className="container-card">
        <Card link="/kelas-f-apps/list-tugas" text="List tugas" />
        <Card link="/kelas-f-apps/jadwal-kelas" text="Jadwal Kelas" />
        <Card link="/kelas-f-apps/daftar-hadir" text="Daftar Hadir" />
      </div>
    </>
  );
};

export default Home;

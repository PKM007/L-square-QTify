import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const res = await axios.get('https://qtify-backend.labs.crio.do/albums/top');
        setTopAlbums(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchNewAlbums = async () => {
      try {
        const res = await axios.get('https://qtify-backend.labs.crio.do/albums/new');
        setNewAlbums(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSongs = async () => {
      try {
        const res = await axios.get('https://qtify-backend.labs.crio.do/songs');
        setSongs(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
  }, []);

  return (
    <div>
      <Navbar />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      <Section title="Songs" data={songs} type="song" />
    </div>
  );
}

export default App;
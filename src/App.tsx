import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { useEffect, useState } from 'react';
import { api } from './services/api';
import './styles/global.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar genres={genres} selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}
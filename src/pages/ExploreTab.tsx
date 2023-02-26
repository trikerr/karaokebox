import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ExploreTab.css';
import { useState, useEffect } from 'react';
import { fetchSongs } from '../services/api';
import { fetchPopularSongs } from '../services/api';
import { fetchTrendingSongs } from '../services/api';
import { fetchRecentSongs } from '../services/api';
import { Song } from '../models/Song';
import SongList from '../components/songs/SongList';
import SearchBar from '../components/general/searchBar';
import { searchSongs } from '../utils/searchUtils';
import ExploreContent from "./ExploreContent";

const ExploreTab: React.FC = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [popularSongs, setPopularSongs] = useState<Song[]>([]);
    const [trendingSongs, setTrendingSongs] = useState<Song[]>([]);
    const [recentSongs, setRecentSongs] = useState<Song[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getSongs = async () => {
            const data = await fetchSongs();
            setSongs(data);
        };
        getSongs();

        const getPopularSongs = async () => {
            const data = await fetchPopularSongs();
            setPopularSongs(data);
        };
        getPopularSongs();

        const getTrendingSongs = async () => {
            const data = await fetchTrendingSongs();
            console.log('data', data);
            setTrendingSongs(data);
        };
        getTrendingSongs();

        const getRecentSongs = async () => {
            const data = await fetchRecentSongs();
            console.log('data', data);
            setRecentSongs(data);
        };
        getRecentSongs();
    }, []);

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    const filteredSongs = searchSongs(songs, searchTerm);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explorar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Explorar</IonTitle>
          </IonToolbar>
        </IonHeader>
          <SearchBar onSearch={handleSearch} placeholder="Buscar por canción, artista o álbum" />
          {searchTerm === '' ? (
              <ExploreContent popularSongs={popularSongs} trendingSongs={trendingSongs} recentSongs={recentSongs} />
          ) : (
            <SongList songs={filteredSongs} />
          )}
      </IonContent>
    </IonPage>
  );
};

export default ExploreTab;

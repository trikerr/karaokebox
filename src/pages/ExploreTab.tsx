import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ExploreTab.css';
import { useState, useEffect } from 'react';
import { fetchSongs } from '../services/api';
import { Song } from '../models/Song';
import SongList from '../components/songs/SongList';
import SearchBar from '../components/general/searchBar';
import { searchSongs } from '../utils/searchUtils';

const ExploreTab: React.FC = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getSongs = async () => {
            const data = await fetchSongs();
            setSongs(data);
        };
        getSongs();
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
          <SongList songs={filteredSongs} />
      </IonContent>
    </IonPage>
  );
};

export default ExploreTab;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import './ExploreTab.css';
import { useState, useEffect } from 'react';
import { fetchSongs } from '../services/api';
import { Song } from '../models/Song';
import SongList from '../components/SongList';

const ExploreTab: React.FC = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        const getSongs = async () => {
            const data = await fetchSongs();
            setSongs(data);
        };
        getSongs();
    }, []);

    const handleSearch = (event: CustomEvent) => {
        setSearchText(event.detail.value);
    }

    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(searchText.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchText.toLowerCase()) ||
        song.album.toLowerCase().includes(searchText.toLowerCase())
    );

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
          <IonSearchbar onIonChange={handleSearch} placeholder="Buscar canciones" />
          <SongList songs={filteredSongs} />
      </IonContent>
    </IonPage>
  );
};

export default ExploreTab;

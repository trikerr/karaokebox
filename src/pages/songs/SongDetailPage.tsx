import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import { Song } from '../../models/Song';
import { useHistory } from 'react-router-dom';

interface SongDetailProps {
    location: {
        state: {
            song?: Song;
        }
    }
}

const SongHeader: React.FC<{ song?: Song, onBackClick: () => void }> = ({ song, onBackClick }) => (
    <IonHeader>
        <IonToolbar>
            <IonButton onClick={onBackClick} fill="clear">
                <IonIcon icon={chevronBack} />
            </IonButton>
            <IonTitle>{song?.title || 'No Song'}</IonTitle>
        </IonToolbar>
    </IonHeader>
);

const SongDetailPage: React.FC<SongDetailProps> = ({ location }) => {
    const song = location.state?.song;
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    };

    return (
        <IonPage>
            <SongHeader song={song} onBackClick={handleBackClick} />
            <IonContent>
                {song ? (
                    <>
                        <h1>{song.title}</h1>
                        <p>Artist: {song.artist}</p>
                        <p>Album: {song.album}</p>
                        <p>Year: {song.year}</p>
                    </>
                ) : (
                    <p>No song selected</p>
                )}
            </IonContent>
        </IonPage>
    );
};

export default SongDetailPage;

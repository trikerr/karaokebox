import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import { Song } from '../../models/Song';
import { useHistory } from 'react-router-dom';

interface SongDetailProps {
    location: {
        state: {
            song: Song;
        }
    }
}

const SongDetailPage: React.FC<SongDetailProps> = ({ location }) => {
    const song = location.state?.song;
    const history = useHistory();

    const handleBackClick = () => {
        history.goBack();
    };

    if (typeof song === "undefined") {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButton onClick={handleBackClick} fill="clear">
                            <IonIcon icon={chevronBack} />
                        </IonButton>
                        <IonTitle></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton onClick={handleBackClick} fill="clear">
                        <IonIcon icon={chevronBack} />
                    </IonButton>
                    <IonTitle>{song.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1>{song.title}</h1>
                <p>Artist: {song.artist}</p>
                <p>Album: {song.album}</p>
                <p>Year: {song.year}</p>
            </IonContent>
        </IonPage>
    );
};

export default SongDetailPage;

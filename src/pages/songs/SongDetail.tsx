import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Song } from '../../models/Song';

interface SongDetailProps {
    song: Song;
}

const SongDetail: React.FC<SongDetailProps> = ({ song }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
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

export default SongDetail;

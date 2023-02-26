import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';
import { Song } from '../models/Song';

interface SongListProps {
    songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
    return (
        <IonList>
            {songs.map((song) => (
                <IonItem key={song.rank}>
                    <IonLabel>
                        <h2>{song.album}</h2>
                        <h3>{song.artist}</h3>
                        <p>{song.title}</p>
                    </IonLabel>
                </IonItem>
            ))}
        </IonList>
    );
};

export default SongList;

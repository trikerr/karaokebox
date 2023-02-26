import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';
import { Song } from '../../models/Song';
import { useHistory } from 'react-router';

interface SongListProps {
    songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
    const history = useHistory();

    const handleSongClick = (songId: string) => {
        const selectedSong = songs.find(song => song.rank.toString() === songId);
        history.push(`/song/${songId}`, { song: selectedSong });
    };

    return (
        <IonList>
            {songs.map((song) => (
                <IonItem key={song.rank} onClick={() => handleSongClick(song.rank.toString())}>
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

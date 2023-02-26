import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { chevronBack, play, pause } from 'ionicons/icons';
import { Song } from '../../models/Song';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './SongDetailPage.css';

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
    const playerRef = useRef<ReactPlayer>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handleBackClick = () => {
        history.goBack();
    };

    const handleVideoReady = () => {
        console.log('Video is ready to play');
    };

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    const handlePauseClick = () => {
        setIsPlaying(false);
    };

    return (
        <IonPage>
            <SongHeader song={song} onBackClick={handleBackClick} />
            <IonContent class="ion-padding">
                {song ? (
                    <>
                        <h1>{song.title}</h1>
                        <p>Artist: {song.artist}</p>
                        <p>Album: {song.album}</p>
                        <p>Year: {song.year}</p>

                        <div className="player-wrapper">
                            <ReactPlayer
                                className="react-player"
                                url="/assets/video/song.mp4"
                                onReady={handleVideoReady}
                                playing={isPlaying}
                                controls={false}
                                width="100%"
                                height="100%"
                            />
                        </div>

                        <IonGrid>
                            <IonRow className="player-controls">
                                <IonCol>
                                    <IonButton expand="block" onClick={handlePlayClick} disabled={isPlaying}>
                                        <IonIcon icon={play} />
                                    </IonButton>
                                </IonCol>
                                <IonCol>
                                    <IonButton expand="block" onClick={handlePauseClick} disabled={!isPlaying}>
                                        <IonIcon icon={pause} />
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </>
                ) : (
                    <p>No song selected</p>
                )}
            </IonContent>
        </IonPage>
    );
};

export default SongDetailPage;

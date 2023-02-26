import React, { useState, useRef } from 'react';
import { IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { play, pause } from 'ionicons/icons';
import ReactPlayer from 'react-player';
import './SongPlayer.css';

interface SongPlayerProps {
    url: string;
}

const SongPlayer: React.FC<SongPlayerProps> = ({ url }) => {
    const playerRef = useRef<ReactPlayer>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

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
        <>
            <div className="player-wrapper">
                <ReactPlayer
                    className="react-player"
                    url={url}
                    onReady={handleVideoReady}
                    playing={isPlaying}
                    controls={false}
                    width="100%"
                    height="100%"
                    ref={playerRef}
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
    );
};

export default SongPlayer;

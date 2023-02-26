import React, { useState, useEffect } from 'react';
import { IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { play, pause } from 'ionicons/icons';
import ReactPlayer from 'react-player';
import CountDown from './CountDown';

interface SongPlayerProps {
    url: string;
    onReady?: () => void;
}

const SongPlayer: React.FC<SongPlayerProps> = ({ url, onReady }) => {
    const [isCountdownActive, setIsCountdownActive] = useState<boolean>(true);
    const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    const handlePauseClick = () => {
        setIsPlaying(false);
    };

    const handleCountDownComplete = () => {
        setIsCountdownActive(false);
        setIsVideoVisible(true);
        setIsPlaying(true);

        if (onReady) {
            onReady();
        }
    };

    return (
        <div className="song-player">
            {isCountdownActive ? (
                <CountDown countdown={3} onCountdownEnd={handleCountDownComplete} />
            ) : (
                <div className="player-wrapper">
                    <ReactPlayer
                        className={`react-player ${isVideoVisible ? 'visible' : ''}`}
                        url={url}
                        playing={isPlaying}
                        controls={false}
                        width="100%"
                        height="100%"
                    />
                    {isVideoVisible && (
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
                    )}
                </div>
            )}
        </div>
    );
};

export default SongPlayer;

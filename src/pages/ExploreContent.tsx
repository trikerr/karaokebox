import {IonContent} from "@ionic/react";
import {Song} from '../models/Song';
import './ExploreContent.css';
import CarruselSongs from "../components/songs/CarruselSongs";

interface ExploreContentProps {
    popularSongs: Song[];
    trendingSongs: Song[];
    recentSongs: Song[];
}

const ExploreContent: React.FC<ExploreContentProps> = ({ popularSongs, trendingSongs, recentSongs }) => {
    return (
        <IonContent class="ion-padding">
            <h2>Populares</h2>
            <CarruselSongs popularSongs={popularSongs} />
            <h2>Tendencias ahora</h2>
            <CarruselSongs popularSongs={trendingSongs} />
            <h2>Reciente</h2>
            <CarruselSongs popularSongs={recentSongs} />
        </IonContent>
    );
};

export default ExploreContent;
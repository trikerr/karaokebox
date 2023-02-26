import React from 'react';
import { IonSlides, IonSlide, IonAvatar } from '@ionic/react';
import { Song } from "../../models/Song";
import { useHistory } from 'react-router';

interface PopularSongsProps {
    popularSongs: Song[];
}

const CarouselSongs: React.FC<PopularSongsProps> = ({ popularSongs }) => {
    const history = useHistory();

    const handleSongClick = (songId: string) => {
        const selectedSong = popularSongs.find(song => song.rank.toString() === songId);
        history.push(`/song/${songId}`, { song: selectedSong });
    };

    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        pagination: false,
        slidesPerView: 3
    };

    return (
        <IonSlides pager={true} options={slideOpts}>
            {popularSongs.map((song) => (
                <IonSlide key={song.rank} onClick={() => handleSongClick(song.rank.toString())}>
                    <div className="squareSong">
                        <IonAvatar className="cover">
                            <img src={song.coverUrl} />
                        </IonAvatar>
                        <div className="nameSong">{song.title}</div>
                        <div className="nameArtist">{song.artist}</div>
                    </div>
                </IonSlide>
            ))}
        </IonSlides>
    );
};

export default CarouselSongs;

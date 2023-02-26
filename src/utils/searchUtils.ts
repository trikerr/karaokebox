import { Song } from '../models/Song';

export const searchSongs = (songs: Song[], searchTerm: string): Song[] => {
    return songs.filter((song) => {
        return (
            song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
};

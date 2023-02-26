export const fetchSongs = async () => {
    const response = await fetch('/assets/data/songs.json');
    const data = await response.json();
    return data.songs;
};

export const fetchPopularSongs = async () => {
    const response = await fetch('/assets/data/popularSongs.json');
    const data = await response.json();
    return data;
};

export const fetchTrendingSongs = async () => {
    const response = await fetch('/assets/data/trendingSongs.json');
    const data = await response.json();
    return data;
};

export const fetchRecentSongs = async () => {
    const response = await fetch('/assets/data/recentSongs.json');
    const data = await response.json();
    return data;
};
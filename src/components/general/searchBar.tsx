import { IonSearchbar } from '@ionic/react';
import { useState } from 'react';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = 'Buscar' }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: CustomEvent) => {
        const searchTerm = event.detail.value;
        setSearchTerm(searchTerm);
        onSearch(searchTerm);
    };

    return (
        <IonSearchbar value={searchTerm} onIonChange={handleSearch} placeholder={placeholder}></IonSearchbar>
    );
};

export default SearchBar;
export interface Movie {
    id: number;
    title: string;
    poster_url: string;
    length: number;
    release_date: string;
    description: string;
    genre: Genre;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Screening {
    id: number;
    datetime: string;
    movie: number;
    hall: number;
}

export interface DataType {
    query: string;
    selectedOption: string
}

export interface SelectScreening {
    datetime: string;
    hall: number;
    id: number
}

export interface Cinema {
    cinemaNumber: number,
    name: string,
    description: string,
    image: string,
    date: string,
    language: string,
    rate: number
}

export interface getAllCinemasProps {
    page: number,
    tag: string
}
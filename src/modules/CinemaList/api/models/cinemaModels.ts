export interface Cinema {
    cinemaNumber: number,
    name: string,
    description: string,
    image: string
}

export interface getAllCinemasProps {
    page: number,
    tag: string
}
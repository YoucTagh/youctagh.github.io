export interface Teaching {
    id: number;
    title: string;
    location: string;
    note: string;
    startingDate: Date;
    endingDate: Date;
    mainConcepts: string[];
    language: string;
    featured: boolean;
}
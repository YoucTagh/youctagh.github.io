export interface Research {
    id: number;
    title: string;
    issuedDate: Date;
    authors: string[];
    theAbstract: string;
    url: string;
    language: string;
    note?: string;
    type: string;
    status: string;
    featured?: boolean;
    conference?: string;
    videoURI?:string;
}
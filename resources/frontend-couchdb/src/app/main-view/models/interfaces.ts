export interface CouchDBResponse {
    total_rows: number;
    offset: number;
    rows: PieceBackendModel[];
}


export interface PieceBackendModel {
    id: string;
    key: string;
    value: string;
}

export interface Piece {
    id: string;
    name: string;
    composer: string;
}


export interface CouchDBDocumentRev {
    _id: string;
    _rev: string;
    age: string;
}
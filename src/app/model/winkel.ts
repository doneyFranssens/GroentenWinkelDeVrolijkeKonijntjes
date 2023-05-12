export class Winkel {
    constructor(
        public naam: string,
        public adres: string,
        public post: number,
        public gemeente: string,
        public tel: string,
        public manager?: string
    ) {}

}
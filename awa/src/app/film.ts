export class Film {
  titre?: string;
  description?: string;
  note?: number;

  constructor(args: Book = {}) {
    this.titre = args.titre;
    this.description = args.description;
    this.note = args.note
  }
}

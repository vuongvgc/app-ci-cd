export interface IQuoteItem {
  _id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export interface IQuoteText {
  text: string;
}
export interface IQuoteAuthor {
  author: string;
}
export interface IButton {
  setIsRandomQuote: React.Dispatch<React.SetStateAction<boolean>>;
}

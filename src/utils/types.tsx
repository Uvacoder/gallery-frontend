export interface ICard {
  dcCreator: string;
  year: string;
  title: string;
  dcTitleLangAware: string;
  edmIsShownBy: string;
  edmPreview: string;
  dcDescription: string;
  dcDescriptionLangAware: string;
  dataProvider: string;
  country: string;
  edmIsShownAt: string;
  source: string;
}

export interface IProp {
  card: ICard;
}

export interface SearchBarProps {
  setSearchTermFinal(search: string): void;
}

export interface ViewPostsProps {
  searchTerm: string;
}

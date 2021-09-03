export interface ICard {
  dcCreator: any;
  year: any;
  title: any;
  dcTitleLangAware: any;
  edmIsShownBy: any;
  edmPreview: any;
  dcDescription: any;
  dcDescriptionLangAware: any;
  dataProvider: any;
  country: any;
  edmIsShownAt: any;
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
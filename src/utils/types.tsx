// export interface ICard {
//   dcCreator: string,
//   year: string,
//   title: string,
//   dcTitleLangAware: string,
//   edmIsShownBy: string,
//   edmPreview: string,
//   dcDescription: string,
//   dcDescriptionLangAware: string,
//   dataProvider: string,
//   country: string,
//   edmIsShownAt: string,
// }

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
  searchTerm: string;
  setSearchTerm(search: string): void;
}

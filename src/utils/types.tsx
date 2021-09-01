export interface ICard {
  card_id: number;
  card_title: string;
  card_desc: string;
  card_img: string;
  card_date: string;
}

export interface IProp {
  card: ICard;
}

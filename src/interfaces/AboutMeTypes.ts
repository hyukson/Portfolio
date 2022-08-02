export interface AboutMeTypes {
  [key: string]: AboutMeItemTypes;
}[];

export interface AboutMeItemTypes {
  title: string;
  icon: { src: string };
  list: AboutMeListTypes[];
}

export interface AboutMeListTypes {
  title: string;
  content?: string;
}
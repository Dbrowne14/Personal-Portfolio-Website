export type NameProp = {
  name: string;
};

export type LinkProp = {
  link: string;
};

export type NameWithLink = NameProp & LinkProp

export type Toggle = {
  toggle: boolean;
};

export type DynamicToggle = Toggle & {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
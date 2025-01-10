import { CTAType } from "./cta";
import { Media } from "./payload-types";

export interface ButtonField {
    label: string;
    url: string;
    type: CTAType;
    customClass: string;
}

export interface RichText {
    type: string;
    children: RichText[];
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
    url?: string;
}

export interface Block {
    id: string;
    __typename: string;
}

export interface ButtonsBlock extends Block {
    button: ButtonField;
}

export interface BannerBlock extends Block {
    backgroundImage: Media;
    heading: RichText[];
    subheading: RichText[];
    button: ButtonField;
}
import { CTAType } from "./cta";

interface ButtonField {
    label: string;
    url: string;
    type: CTAType;
    customClass: string;
}

export interface ButtonsBlock {
    button: ButtonField;
}

export interface BannerBlock {
    backgroundImage: string;
    heading: string;
    subheading: string;
    button: ButtonField;
}

export type Block = BannerBlock | ButtonsBlock; 
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

export interface BannerBlock extends Block {
    backgroundImage: Media;
    mobileBackgroundImage: Media;
    heading: RichText[];
    subheading: RichText[];
    button: ButtonField;
}

export interface AboutBlock extends Block {
    title: string;
    images: Array<{ image: Media, alt?: string }>;
    paragraph: string;
}

export interface ServicesBlock extends Block {
    title: string;
    services: Array<{
        image: Media;
        heading: string;
        paragraph: string;
    }>
}

export interface WhyChooseUsBlock extends Block {
    title: string;
    paragraph: string;
    carouselImages: Array<{ image: Media }>;
}

export interface PricelistBlock extends Block {
    backgroundImage?: Media;
    title: string;
    pricelists: Array<{
        serviceGroup: string;
        services: Array<{
            serviceName: string;
            servicePrice: string;
        }>
    }>;
}
import { BannerBlock } from "@repo/types";
import { RichText } from "../RichText/RichText";

import './Banner.scss'

const Banner: React.FC<BannerBlock> = ({ heading, subheading, backgroundImage, mobileBackgroundImage, button }) => {
    return (
        <section 
            className="banner"
            style={{
                backgroundImage: `url(${backgroundImage?.fullUrl})`
            }}
        >
            {heading?.length ? <RichText className="banner__heading">{heading}</RichText> : ''}
            {subheading?.length ? <RichText className="banner__subheading">{subheading}</RichText> : ''}
            {button?.label ? <button>{button?.label}</button> : ''}
        </section>
    )
}


export default Banner;
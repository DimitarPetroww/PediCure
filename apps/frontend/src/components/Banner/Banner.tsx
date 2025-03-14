import { BannerBlock } from "@repo/types";
import { RichText } from "../RichText/RichText";

import './Banner.scss'

const Banner: React.FC<BannerBlock> = ({ heading, subheading, backgroundImage, mobileBackgroundImage, button }) => {
    console.log(backgroundImage)

    return (
        <section 
            className="banner"
            style={{
                backgroundImage: `linear-gradient(to top, #000, #000000a8 16%, #0000 41%), url(${backgroundImage?.fullUrl})`
            }}
        >
            {heading?.length ? <RichText className="banner__heading">{heading}</RichText> : ''}
            {subheading?.length ? <RichText className="banner__subheading">{subheading}</RichText> : ''}
            {button?.label ? <button>{button?.label}</button> : ''}
            <div className="banner__arrow"/>
        </section>
    )
}


export default Banner;
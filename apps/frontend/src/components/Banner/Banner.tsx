import { BannerBlock } from "@repo/types";
import { RichText } from "../RichText/RichText";

import './Banner.scss'

const Banner: React.FC<BannerBlock> = ({ heading, subheading, backgroundImage, button }) => {
    return (
        <section 
            className="banner"
            style={{
                backgroundImage: `url(${backgroundImage?.fullUrl})`
            }}
        >
            {heading?.length ? <RichText>{heading}</RichText> : ''}
            {subheading?.length ? <RichText>{subheading}</RichText> : ''}
            {button?.label ? <button>{button?.label}</button> : ''}
        </section>
    )
}


export default Banner;
import { AboutBlock, BannerBlock, Block as BlockType, PricelistBlock, ServicesBlock, WhyChooseUsBlock } from "@repo/types";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import Pricelist from "../Pricelist/Pricelist";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Block: React.FC<BlockType> = (props) => {
    let Component: React.FC<any>;

    switch (props.__typename) {
        case 'Banner':
            Component = Banner as React.FC<BannerBlock>;
            break;
        case 'About':
            Component = About as React.FC<AboutBlock>;
            break;
        case 'Services':
            Component = Services as React.FC<ServicesBlock>;
            break;
        case 'WhyChooseUs':
            Component = WhyChooseUs as React.FC<WhyChooseUsBlock>;
            break;
        case 'Pricelist':
            Component = Pricelist as React.FC<PricelistBlock>;
            break;
        default:
            Component = () => null;
            break;
    }

    return <Component {...props} />
}


export default Block;
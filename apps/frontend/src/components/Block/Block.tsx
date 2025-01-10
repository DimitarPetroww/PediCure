import { BannerBlock, Block as BlockType, ButtonsBlock } from "@repo/types";
import Banner from "../Banner/Banner";
import Buttons from "../Buttons/Buttons";

const Block: React.FC<BlockType> = (props) => {
    let Component: React.FC<any>;

    switch (props.__typename) {
        case 'Banner':
            Component = Banner as React.FC<BannerBlock>;
            break;
        case 'Buttons':
            Component = Buttons as React.FC<ButtonsBlock>;
            break;
        default: 
            Component = () => null;
            break;
    }

    return <Component {...props}/>
}


export default Block;
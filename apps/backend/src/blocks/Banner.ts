import { Block } from "payload/types";

import Button from "../fields/Button";

const Banner: Block = {
    slug: 'banner',
    fields: [
        { name: 'backgroundImage', type: 'upload', relationTo: 'media', required: false },
        { name: 'mobileBackgroundImage', type: 'upload', relationTo: 'media', required: false },
        { name: 'heading', type: 'richText', required: false },
        { name: 'subheading', type: 'richText', required: false },
        Button
    ]
};

export default Banner;
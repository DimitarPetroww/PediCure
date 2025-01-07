import { CollectionConfig } from "payload/types";

import Banner from "../blocks/Banner";
import Buttons from "../blocks/Buttons";

const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [Banner, Buttons],
    },
  ],
  access: {
    read: () => true
  }
};

export default Pages;

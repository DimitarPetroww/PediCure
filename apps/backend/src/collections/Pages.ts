import { CollectionConfig } from "payload/types";

import Banner from "../blocks/Banner";
import About from "../blocks/About";
import Services from "../blocks/Services";
import WhyChooseUs from "../blocks/WhyChooseUs";
import Pricelist from "../blocks/Pricelist";

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
      blocks: [Banner, About, Services, WhyChooseUs, Pricelist],
    },
  ],
  access: {
    read: () => true
  }
};

export default Pages;

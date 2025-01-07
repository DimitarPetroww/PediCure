import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
    slug: 'media',
    upload: {
      staticDir: 'uploads',
      mimeTypes: ['image/*'],
    },
    fields: []
  };
  
  export default Media;
  
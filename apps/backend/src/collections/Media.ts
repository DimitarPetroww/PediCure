import { CollectionAfterReadHook, CollectionConfig } from "payload/types";

const getFullUrl: CollectionAfterReadHook  = ({ doc, req }) => {
  doc.fullUrl = `${req.protocol}://${req.headers.host}${doc.url}`;

  return doc;
}

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'fullUrl',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
  ],
  access: {
    read: () => true
  },
  hooks: {
    afterRead: [getFullUrl]
  }
};

export default Media;

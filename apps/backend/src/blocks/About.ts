import { Block } from 'payload/types';

const About: Block = {
  slug: 'about',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true
    },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      required: true,
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image',
        },
        {
          name: 'altText',
          type: 'text',
          required: false,
          label: 'Alt Text',
        },
      ],
    },
    {
      name: 'paragraph',
      type: 'textarea',
      required: true,
      label: 'Paragraph',
    },
  ],
};

export default About;

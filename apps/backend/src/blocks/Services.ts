import { Block } from 'payload/types';

const Services: Block = {
    slug: 'services',
    fields: [
        {

            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'services',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'heading',
                    type: 'text',
                    required: false,
                },
                {
                    name: 'paragraph',
                    type: 'text',
                    required: false,
                },
            ],
        }
    ],
};

export default Services;

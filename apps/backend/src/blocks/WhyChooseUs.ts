import { Block } from 'payload/types';

const WhyChooseUs: Block = {
    slug: 'whyChooseUs',
    fields: [
        {

            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'paragraph',
            type: 'textarea',
            required: true
        },
        {
            name: 'carouselImages',
            type: 'array',
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
            ],
        }
    ],
};

export default WhyChooseUs;

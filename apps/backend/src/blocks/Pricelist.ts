import { Block } from 'payload/types';

const Pricelist: Block = {
    slug: 'pricelist',
    fields: [
        {
            name: 'backgroundImage',
            type: 'upload',
            required: false,
            relationTo: 'media'
        },
        {

            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'pricelists',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'serviceGroup',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'services',
                    type: 'array',
                    required: true,
                    fields: [
                        {
                            name: 'serviceName',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'servicePrice',
                            type: 'text',
                            required: true,
                        }
                    ]
                }
            ],
        }
    ],
};

export default Pricelist;

import { GlobalConfig } from 'payload/types';

const Header: GlobalConfig = {
    slug: 'header',
    label: 'Header Settings',
    fields: [
        {
            name: 'phone',
            type: 'group',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                    label: 'Phone Label',
                },
                {
                    name: 'value',
                    type: 'text',
                    required: true,
                    label: 'Phone Number',
                },
            ]
        },
        {
            name: 'address',
            type: 'group',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                    required: true,
                    label: 'Address Name',
                },
                {
                    name: 'value',
                    type: 'text',
                    required: true,
                    label: 'Address Link',
                },
            ]
        },
        {
            name: 'facebookLink',
            type: 'text',
            required: true,
            label: 'Facebook Link',
        },
    ],
    access: {
        read: () => true
    }
};

export default Header;

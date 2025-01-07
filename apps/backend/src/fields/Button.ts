import { Field } from 'payload/types';

import { CTAType } from '@repo/types';

const Button: Field = {
    name: 'button',
    type: 'group',
    fields: [
        {
            name: 'label',
            type: 'text',
            required: false,
        },
        {
            name: 'url',
            type: 'text',
            required: false,
        },
        {
            name: 'type',
            type: 'select',
            options: Object.keys(CTAType).map((key) => ({
                label: key,
                value: CTAType[key]
            })),
            defaultValue: CTAType.Primary
        },
        {
            name: 'customClass',
            type: 'text',
        },
    ],
};

export default Button;

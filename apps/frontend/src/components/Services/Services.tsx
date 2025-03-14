import { ServicesBlock } from '@repo/types';

import './Services.scss';

const Services: React.FC<ServicesBlock> = async ({ title, services }) => {
    return (
        <section className='services'>
            <h2 className='services__title'>{title}</h2>
            <div className='services__grid'>
                {services.map((service, i) => (
                    <article className='services__card' key={i}>
                        <img src={service?.image?.fullUrl as string | undefined} />
                        <h6 className='services__card__title'>{service.heading}</h6>
                        <p className='services__card__paragraph'>{service.paragraph}</p>
                    </article>
                ))}
            </div>
        </section>
    )
};

export default Services;
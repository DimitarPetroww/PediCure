import { PricelistBlock } from '@repo/types';

import './Pricelist.scss';

const Pricelist: React.FC<PricelistBlock> = async ({ title, pricelists, backgroundImage }) => {
    return (
        <>
            <section className='pricelist'>
                <div className='pricelist__grid'>
                    <article
                        className='pricelist__meta'
                        style={{
                            backgroundImage: `url(${backgroundImage?.fullUrl})`
                        }}>
                        <h2 className='pricelist__meta__title'>{title}</h2>
                    </article>
                    {pricelists.map(pricelist => (
                        <article className='pricelist__card'>
                            <h4 className='pricelist__card__title'>{pricelist.serviceGroup}</h4>
                            <ul className='pricelist__card__list'>
                                {pricelist.services.map(service => (
                                    <li className='pricelist__card__list__item'>
                                        <p className='pricelist__card__list__item__title'>{service.serviceName}</p>
                                        <strong className='pricelist__card__list__item__price'>{service.servicePrice}</strong>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
};

export default Pricelist;
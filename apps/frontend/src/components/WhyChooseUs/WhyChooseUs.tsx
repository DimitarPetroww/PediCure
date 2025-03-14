import { WhyChooseUsBlock } from '@repo/types';

import './WhyChooseUs.scss';

const WhyChooseUs: React.FC<WhyChooseUsBlock> = async ({ title, carouselImages, paragraph }) => {
    return (
        <section className='whyChooseUs'>
            <article className='whyChooseUs__card'>
                <div className='whyChooseUs__card__images'>
                    {carouselImages.map(img => (
                        <img src={img.image.fullUrl as undefined | string} />
                    ))}
                </div>
                <div>
                    <h2 className='whyChooseUs__title'>{title}</h2>
                    <p className='whyChooseUs__paragraph'>{paragraph}</p>
                </div>
            </article>
        </section>
    )
};

export default WhyChooseUs;
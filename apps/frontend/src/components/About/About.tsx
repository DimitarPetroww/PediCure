import { AboutBlock, Media } from "@repo/types";

import './About.scss';

const About: React.FC<AboutBlock> = ({ title, paragraph, images }) => {
    return (
        <section className="about">
            <div>
                <h2 className="about__title">
                    {title}
                </h2>
                <p className="about__paragraph">{paragraph}</p>
            </div>
            <div className="about__images">
                {images.map((x: { image: Media, alt?: string }, i: number) => {
                    return <img key={i} src={x.image.fullUrl as undefined | string} alt={x.alt}/>
                })}
            </div>
        </section>
    );
};

export default About;
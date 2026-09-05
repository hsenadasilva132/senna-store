import '../../styles/categoryStory.css'

import { useRef } from 'react';

import { usecategoryStoryAnimation } from '../../Animations/categoryAnimation';
import { stories } from '../../services/imagesCategory';


function CategoryStory({ category }) {

    const sectionWrapRef = useRef(null);
    const imageRefs = useRef([]);
    const sectionsRef = useRef([]);
    const dotsRef = useRef([]);
    const progressRef = useRef(null);

    const data = stories[category] || [];


    usecategoryStoryAnimation({
        sectionWrapRef,
        imageRefs,
        sectionsRef,
        dotsRef,
        progressRef,
        data
    });

    return (
        <section className='category-story' ref={sectionWrapRef}>
            <div className='story-gallery'>
                <div className='story-gallery-frame'>
                {data.map((item, index) => (
                    <img
                        key={index}
                        src={item.image}
                        alt=""
                        ref={(el) => imageRefs.current[index] = el}
                    />
                ))}
                <div className='story-gallery-vignette' />
            </div>

            <div className='story-index'>
                {data.map((item, index) => (
                    <span
                        key={index}
                        ref={(el) => dotsRef.current[index] = el}
                        className={index === 0 ? 'story-index-item active' : 'story-index-item'}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>
                ))}
                </div>
            </div>
                

            <div className='story-texts'>
                <div className='story-progress-rail'>
                    <span className='story-progress-fill' ref={progressRef} />
                </div>

                {data.map((item, index) => (
                    <article
                        key={index}
                        ref={(el) => sectionsRef.current[index] = el}
                        className={index === 0 ? 'story-block active' : 'story-block'}
                    >
                        <span className='story-block-ghost' aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                        {/* <span className='story-block-index'>{String(index + 1).padStart(2, '0')}</span> */}
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default CategoryStory;
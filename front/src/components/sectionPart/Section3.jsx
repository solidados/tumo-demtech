import { useEffect, useState } from 'react';
import RoadmapSlider from '../roadmapSlider/RoadmapSlider';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import './section.scss';

const SectionThree = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [image1, image2, image3];
  return (
    <section className="section-three">
      <div className="container">
        <div className="section-three-wrapper">
          <div className="section-three-left">
            <h3>Looking For An Attorney?</h3>
            <p>
              Take advantage of RightAid's search technology, detailed profiles,
              ratings, and reviews to evaluate and connect with attorneys.
            </p>
            <RoadmapSlider
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
          <div className="section-three-right">
            <img src={images[activeIndex]} alt={`Slide ${activeIndex + 1}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;

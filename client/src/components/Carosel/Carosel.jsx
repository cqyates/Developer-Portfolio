import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProjectCarosel = ({projects}) => {
  console.log(projects)
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
     {projects.map(project => (
       <Carousel.Item key={project._id}>{project.title}</Carousel.Item>
     ))}
    </Carousel>
  );
};
export default ProjectCarosel;

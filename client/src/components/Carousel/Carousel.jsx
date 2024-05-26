import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
const ProjectCarosel = () => {
  const { loading, data } = useQuery(QUERY_USER);
  // const userData = data?.user || {}
  const projectsArray = data?.user.projects || [];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
     {projectsArray.map(project => (
       <Carousel.Item key={project.title}>{project.title}</Carousel.Item>
     ))}
    </Carousel>
  );
};
export default ProjectCarosel;

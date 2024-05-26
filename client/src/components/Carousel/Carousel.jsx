import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';
import ReactImageFinder from '../../assets/images/screenshots/react-image-search.png';
import Vintage4me2 from "../../assets/images/screenshots/vintage4me2-image.png";
import "./style.css"
const ProjectCarosel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const myProjectArray = [
      {
        id: 1,
        title: 'React Image Finder',
        description:
          'A react front end application with images pulled from the unsplash api',
        deployedLink: 'https://cqyates.github.io/react-image-finder/',
        githubLink: 'https://github.com/cqyates/react-image-finder',
        imageName: ReactImageFinder,
      },
      {
        id: 2,
        title: 'Vintage4me2.com',
        description:
          'My long standing shopify webstore for my vintage sewing pattern ecommerce business. Fully Integrated with Facebook, Pinterest, Google and Klaviyo Email CMS. Use collections and filters to create a side menu to quickly navigate through many different options. Source code is properietry',
        deployedLink: 'https://www.vintage4me2.com/',
        githubLink: 'https://www.vintage4me2.com/',
        imageName: Vintage4me2,
      },
  ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{margin: "2em"}}>
      {myProjectArray.map(({ id, title, description, imageName }) => (
        <Carousel.Item key={id} style={{height: "100%"}}>
          <img src={imageName} style={{width: "60vw"}}></img>
          <CarouselCaption id={"caption-box-"+ id}>
            <h5>{title}</h5>
            <p>{description}</p>
          </CarouselCaption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default ProjectCarosel;

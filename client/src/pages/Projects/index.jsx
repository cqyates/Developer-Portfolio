import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import ProjectCarousel from '../../components/Carosel/Carosel';
const ProjectPage = () => {
  const { loading, data } = useQuery(QUERY_USER);
  // const userData = data?.user || {}
  const projectsArray = data?.user.projects || [];

  return (
    <section>
      <ProjectCarousel projects={projectsArray} />
    </section>
  );
};

export default ProjectPage;

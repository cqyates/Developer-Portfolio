// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../../utils/queries';
import JumboTron from '../../components/JumboTron';
const HomePage = () => {
  //for signed in user to create edit and admin privileges

  // const { loading, data } = useQuery(QUERY_ME);
  // const userData = data?.me || {};

  // for visitors to my website to see my work
  // const {loading, data} = useQuery(QUERY_USER)
  // const userData = data?.user || {}
  // console.log(userData)
  return (
    <section>
      <JumboTron />
    </section>
  );
};

export default HomePage;

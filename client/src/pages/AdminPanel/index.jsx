import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

const AdminPanel = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};
  console.log(data?.me)
  console.log(userData)
  return (
    <main>
      <h2>Future Home of Main Admin Panel</h2>
    </main>
  )
}
export default AdminPanel
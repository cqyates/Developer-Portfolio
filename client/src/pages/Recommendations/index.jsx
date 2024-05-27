import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import Card from "react-bootstrap/Card"
const RecommendationPage = () => {
  const {loading, data} = useQuery(QUERY_USER)
  const recommendationArray= data?.user.recommendations || []
  console.log(recommendationArray)
  //const userData = data?.user || {}
  
  return (
    <section>
    {recommendationArray.map((recommendation)=> (
      <Card key={recommendation._id}>
        <Card.Header>
        <Card.Title>{recommendation.firstName + " " + recommendation.lastName}</Card.Title>
        <Card.Subtitle>{recommendation.relationship}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>{recommendation.recommendationText}</Card.Text>
          {recommendation.relationship === "former student"? <Card.Subtitle>Github</Card.Subtitle>: <Card.Subtitle>Current Company</Card.Subtitle>}
        </Card.Body>
      </Card>
    ))}
    </section>
  )  
}

export default RecommendationPage
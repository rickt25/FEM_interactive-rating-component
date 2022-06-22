import { useState } from 'react'
import Card from '../components/Card'
import FormRating from '../components/FormRating'
import ListRating from '../components/ListRating'
import Result from '../components/Result'

export default function RatingPage(){
  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false);

  const ratings = [1, 2, 3, 4, 5];
  const listRating = ratings.map((number, index) =>
    <ListRating 
      key={index} 
      onClick={() => setRating(number)} 
      rating={rating} 
      number={number}
    />
  );

  function handleSubmit(){
    if(ratings.includes(rating)){
      setSubmit(true);
    }
  }

  return (
    <Card>
      {!submit ?
      <FormRating onSubmit={handleSubmit} listRating={listRating} /> :
      <Result rating={rating} />}
    </Card>
  )
}
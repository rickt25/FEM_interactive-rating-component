import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/Card'
import Form from './pages/Form'
import Button from './components/Button'
import Circle from './components/Circle'
import Result from './pages/Result'

function App() {
  const [rating, setRating] = useState(0);
  const [submit, setSubmit] = useState(false);
  const ratings = [1, 2, 3, 4, 5];
  const listRating = ratings.map((number, index) =>
    <Button onClick={() => setRating(number)} key={index}>
      <Circle className={number == rating ? "active" : ""}>
        {number}
      </Circle>
    </Button>
  );

  function handleSubmit(){
    if(ratings.includes(rating)){
      setSubmit(true);
    }
  }

  return (
    <Card>
      {!submit ?
      <Form onSubmit={handleSubmit} listRating={listRating} /> :
      <Result rating={rating} />}
    </Card>
  )
}

export default App

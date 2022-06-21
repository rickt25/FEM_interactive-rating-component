import Circle from '../components/Circle';
import thankYou from '../images/illustration-thank-you.svg';

export default function Result({ rating }){
  return (
    <div className='center'>
      <div className='thank-img'>
          <img src={thankYou} />
      </div>
      <div><span className='selected'>You selected {rating} out of 5</span></div>
      <h1 className='center'>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. 
        If you ever need more support,
        don’t hesitate to get in touch!
      </p>
    </div>
  );
}
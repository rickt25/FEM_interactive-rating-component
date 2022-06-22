import Button from "./Button";
import Circle from "./Circle";
import star from "../images/icon-star.svg";

export default function FormRating({ listRating, onSubmit }){
  return (
    <>
      <div>
        <Circle>
          <img src={star} />
        </Circle>
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!
      </p>
      <div className="rating">
        {listRating}
      </div>

      <Button className="btn-primary" onClick={onSubmit}>SUBMIT</Button>
    </>
  );
}
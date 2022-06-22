import Button from "./Button";
import Circle from "./Circle";

export default function ListRating({ onClick, number, rating }){
  return (
    <Button onClick={() => onClick(number)}>
      <Circle className={number == rating ? "active" : ""}>
        {number}
      </Circle>
    </Button>
  )
}
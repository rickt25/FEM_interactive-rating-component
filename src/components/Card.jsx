import Button from "./Button";
import Circle from "./Circle";
import { useState } from "react";

export default function Card({ children }){
 

  return (
    <div className="card">
      {children}
    </div>
  )
}


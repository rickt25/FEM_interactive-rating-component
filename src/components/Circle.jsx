function Circle({ children, className }){
  return (
    <span className={`circle ${className}`}>
      {children}
    </span>
  )
}

export default Circle
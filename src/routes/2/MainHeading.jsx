const MainHeading = (props) => {
  console.log(props.className)
  return (
    <>
      <h1 className={`display-1 ${props.className}`}>{props.children}</h1>
      <hr />
    </>
  )
}

export default MainHeading

import styled from "styled-components"
import { useState, useEffect } from "react"
import Circle from "./components/Circle";
import ButtonsContainer from "./ButtonsContainer";

const StyledCircleContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const CircleContainer = () => {
  const [circle, setCircle] = useState();
  const [circlesArray, setCirclesArray] = useState([]);
  const handleCreateCircle=(e)=>{
    e.preventDefault()
    console.log("circles container clicked")
   const newCircle = {
    id: Date.now(),
    xAxis: e.clientX -20,
    yAxis: e.clientY -20,
    color: '#636363',
   }
   setCircle(newCircle);
   setCirclesArray((prevCircles) => [...prevCircles, newCircle]);
  }

  // const handleCirclesArray=()=>{
  //   setCirclesArray((prevCircles) => [...prevCircles, circle]);
  // }



  console.log(circle)
  console.log(circlesArray)

  return (
   <StyledCircleContainer onClick={handleCreateCircle}>
    <ButtonsContainer />
    {circlesArray.map((circle)=>{
       return <Circle key={circle.id} x={circle.xAxis} y={circle.yAxis} color={circle.color} />
    }
    )}
   </StyledCircleContainer>
  )
}

export default CircleContainer
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

  const [circlesArray, setCirclesArray] = useState([]);
  const [transferArray, setTransferArray] = useState([]);

  const handleCreateCircle = (e) => {
    e.preventDefault()
    console.log("circles container clicked")

    const newCircle = {
      id: Date.now(),
      xAxis: e.clientX - 20,
      yAxis: e.clientY - 20,
      color: '#636363',
    }
    setCirclesArray((prevCircles) => [...prevCircles, newCircle]);
  }
  // useEffect(() => {

  // }, [circlesArray, transferArray])

  return (
    <StyledCircleContainer onClick={handleCreateCircle}>
      <ButtonsContainer circlesArray={circlesArray} transferArray={transferArray} setCirclesArray={setCirclesArray} setTransferArray={setTransferArray} resetUndoDisabled={circlesArray.length === 0} redoDisabled={transferArray.length === 0} />
      {circlesArray.map((circle) => {
        return <Circle key={circle.id} x={circle.xAxis} y={circle.yAxis} color={circle.color} />
      }
      )}
    </StyledCircleContainer>
  )
}

export default CircleContainer 
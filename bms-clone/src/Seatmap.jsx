import React, { useEffect, useState } from "react";
import screen from "./cinema-screen.png";
import Form from "./Form";
import { ChakraProvider } from "@chakra-ui/react";

const Seatmap = ({tickets}) => {

  console.log(tickets);
  const container = document.querySelector(".container");
  const seats = document.querySelectorAll(".row .seat:not(.occupied)");

  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
  }

  function handleClick(e) {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("occupied")
    ) {
      e.target.classList.toggle("selected");
    }
    updateSelectedCount();
  }

  const [matrix, setMatrix] = useState([
    { row: "A", col: [1, 2, 3, 4, 5, 6, 7, 8].map(() => false) },
    { row: "B", col: [1, 2, 3, 4, 5, 6, 7, 8].map(() => false) },
    { row: "C", col: [1, 2, 3, 4, 5, 6, 7, 8].map(() => false) },
    { row: "D", col: [1, 2, 3, 4, 5, 6, 7, 8].map(() => false) },
    { row: "E", col: [1, 2, 3, 4, 5, 6, 7, 8].map(() => false) },
    { row: "F", col: [1, 2, 3, 4, 5, 6].map(() => false) },
  ]);

  let selectedSeats = [];

  function handleSeat(row, seat){
   
   let newArr = selectedSeats.filter(el=> el!=`${row}-${seat}`)

   console.log(selectedSeats);

   if(selectedSeats.length>tickets-1){
    alert('Maximum Tickets Reached !')
   }
  else if (!selectedSeats.includes(`${row}-${seat}`)) {
    selectedSeats.push(`${row}-${seat}`);
  } else {
    selectedSeats = newArr
  }
  }

  return (

    <>
    
    <div onClick={handleClick} class="container">
      <div style={{ margin: "auto" }} class="screen"></div>
      <div>
        {/* <p style={{ marginTop: "-40px" }}>All Eyes This Side Please!</p> */}

        <div style={{ width: "85%", margin: "auto" }}>
          {matrix?.map((item, index) => {
            return (
              <div
                class="row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "white",
                }}
              >
                <b>{item.row}</b>
                {item?.col?.map((el, ind) => {
                  return (
                    <div
                      onClick={() => handleSeat(item.row, ind+1)}
                      className="seat"
                      style={{
                        margin: "25px",
                        border: "1px solid green",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {ind + 1}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <ul class="showcase">
    <li>
      <div class="seat"></div>
      <small>Available</small>
    </li>
    <li>
      <div class="seat selected"></div>
      <small>Selected</small>
    </li>
    <li>
      <div class="seat occupied"></div>
      <small>Occupied</small>
    </li>    
  </ul>
    </div>
    </>
  );
};

export default Seatmap;

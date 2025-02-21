import React, { useMemo, useState } from "react";

export const FIndBomb1 = () => {
  const gridSize = 3;
  const totalTiles = gridSize * gridSize;

  //bomb random positino
  const bombPosition = useMemo(
    () => Math.floor(Math.random() * totalTiles),
    [totalTiles]
  );
  console.log(bombPosition)
  const [clickedTiles, setclickedTiles] = useState([]);
  const [gameOver, setgameOver] = useState(false);
  const [message, setmessage] = useState("Find bomb");

  const handleClick = (index)=>{

    if(index === bombPosition){
        setmessage("💣 Boom !! you found bomb !")
        setgameOver(true)
    }
    else{
        setmessage("keep searching...")
        setclickedTiles([...clickedTiles,index])
    }

  }

  return (
    <div>
      <h1>{message}</h1>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 50px)`,
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: totalTiles }).map((_, index) => {
            return <div
                onClick={()=>{handleClick(index)}}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                backgroundColor: clickedTiles.includes(index) ? "#ddd" : "#fff",
                cursor: "pointer",
              }}
            >
                {gameOver && index === bombPosition ?"💣" :""}
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

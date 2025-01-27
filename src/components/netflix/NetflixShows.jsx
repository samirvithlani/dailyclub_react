import React from "react";
import { Link } from "react-router-dom";

export const NetflixShows = () => {
  var shows = [
    {
      id:101,
      name:"Friends"
    },
    {
      id:102,
      name:"balck warrent"
    },
    {
      id:103,
      name:"luckey bhasker"
    }
  ]
  return (
    <div>
      <h1>NETFLIX SHOWS</h1>
      <ul>
        <li>
          <Link to="/play/moneyHeist">Money Heiest</Link>
        </li>
        <li>
          <Link to="/play/narcos">Narcos</Link>
        </li>
        <li>
          <Link to = "/play/mismatched">Mismatched</Link>
        </li>
        {
          shows.map((sh)=>{
            return <li>
              <Link to ={`/play/${sh.name}`}>{sh.name}</Link>
            </li>
          })
        }
      </ul>
    </div>
  );
};

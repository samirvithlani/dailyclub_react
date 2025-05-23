import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              {/* <a class="nav-link" href="/netflixhome">
                Home 
              </a> */}
              <Link to="/netflixhome" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              
              <Link to="/expensemanager" className="nav-link">
                EXPENSE MANAGER
              </Link>
            </li>
            <li class="nav-item active">
              
              <Link to="/prodcomp" className="nav-link">
              prodcomp
              </Link>
            </li>
            

            {/* <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                form demo1
              </Link>
            </li> */}

            {/* <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">
                formdemo4
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/findbomb">
                findbomb
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/findbomb1">
                findbomb 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/data">
                data
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                LOGIN
              </Link>
            </li> */}
            
            {/* <li class="nav-item">
              <Link class="nav-link" to="/useeffect">
              useeffect
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
              API DEMO 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
              API DEMO 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
              API DEMO 3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/addproduct">
              ADD PRODUCT
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/members">
              MEMBERS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/gennum">
              GEN NUM
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

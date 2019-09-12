import React from "react";
import Banner1 from "../../assets/images/banners/1.jpg";
import Banner2 from "../../assets/images/banners/2.jpg";
import LatestBook1 from "../../assets/images/latest-books/1.png";
import LatestBook2 from "../../assets/images/latest-books/2.png";
import LatestBook3 from "../../assets/images/latest-books/3.png";
import LatestBook4 from "../../assets/images/latest-books/4.png";
import LatestBook5 from "../../assets/images/latest-books/5.png";
import "./home.scss";

export default class home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="slider-container">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
              data-interval="2000"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={Banner1} alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={Banner2} alt="Second slide" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="latest-books d-flex justify-content-center align-items-center flex-column">
            <div>
              <p>LATEST BOOKS</p>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <img src={LatestBook1} alt="latest-book-1" />
              <img src={LatestBook2} alt="latest-book-2" />
              <img src={LatestBook3} alt="latest-book-3" />
              <img src={LatestBook4} alt="latest-book-4" />
              <img src={LatestBook5} alt="latest-book-5" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

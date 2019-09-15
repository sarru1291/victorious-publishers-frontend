import React from "react";
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
                  <img
                    class="d-block w-100"
                    src="https://res.cloudinary.com/sarru1291/image/upload/v1568550407/victoriouspublishers/banners/1.jpg"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="https://res.cloudinary.com/sarru1291/image/upload/v1568550477/victoriouspublishers/banners/2.jpg"
                    alt="Second slide"
                  />
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
              <img
                src="https://res.cloudinary.com/sarru1291/image/upload/v1568550487/victoriouspublishers/latest-books/1.png"
                alt="latest-book-1"
              />
              <img
                src="https://res.cloudinary.com/sarru1291/image/upload/v1568550491/victoriouspublishers/latest-books/2.png"
                alt="latest-book-2"
              />
              <img
                src="https://res.cloudinary.com/sarru1291/image/upload/v1568550536/victoriouspublishers/latest-books/3.png"
                alt="latest-book-3"
              />
              <img
                src="https://res.cloudinary.com/sarru1291/image/upload/v1568550541/victoriouspublishers/latest-books/4.png"
                alt="latest-book-4"
              />
              <img
                src="https://res.cloudinary.com/sarru1291/image/upload/v1568550523/victoriouspublishers/latest-books/5.png"
                alt="latest-book-5"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

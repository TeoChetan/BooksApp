import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  let items = document.querySelectorAll(".carousel.carousel-item");

  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });

  return (
    <div className="startPage">
      <div className="container">
        <section id="title">
          <div className="row">
            <div className="sub_title col-lg-12 col-md-6">
              <h1>
                Discover new and interesting BOOKS from all over the World.
              </h1>
              <hr className="horizontal-line col-sm-8"></hr>

              <h3>New releases</h3>
              <Link className="view-books-title btn" to="/home">View all</Link>

              <Carousel className="carousel">
                <Carousel.Item>
                  <div>
                    <img className="books-carousel " src="./book3.png "></img>
                    <img className="books-carousel " src="./book4.png "></img>
                    <img className="books-carousel " src="./book5.png "></img>
                    <img className="books-carousel " src="./book6.png "></img>
                    <img className="books-carousel " src="./book3.png "></img>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div>
                    <img className="books-carousel " src="./book12.png "></img>
                    <img className="books-carousel " src="./book4.png "></img>
                    <img className="books-carousel " src="./book11.png "></img>
                    <img className="books-carousel " src="./book6.png "></img>
                    <img className="books-carousel " src="./book10.png "></img>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="col-lg-12 col-md=6 col-sm-12">
                    <img className="books-carousel " src="./book7.png "></img>
                    <img className="books-carousel " src="./book3.png "></img>
                    <img className="books-carousel " src="./book9.png "></img>
                    <img className="books-carousel " src="./book8.png "></img>
                    <img className="books-carousel " src="./book11.png "></img>
                  </div>
                </Carousel.Item>
              </Carousel>

              <h3>Hot this week</h3> 
              <Link className="view-books-title btn" to="/home">View all</Link>
              <Carousel className="carousel">
                <Carousel.Item>
                  <div>
                    <img className="books-carousel " src="./book3.png "></img>
                    <img className="books-carousel " src="./book4.png "></img>
                    <img className="books-carousel " src="./book5.png "></img>
                    <img className="books-carousel " src="./book9.png "></img>
                    <img className="books-carousel " src="./book8.png "></img>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div>
                    <img className="books-carousel " src="./book5.png "></img>
                    <img className="books-carousel " src="./book6.png "></img>
                    <img className="books-carousel " src="./book3.png "></img>
                    <img className="books-carousel " src="./book8.png "></img>
                    <img className="books-carousel " src="./book5.png "></img>
                  
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div className="col-lg-12 col-md=6 ">
                  <img className="books-carousel " src="./book1.png "></img>
                  <img className="books-carousel " src="./book4.png "></img>
                  <img className="books-carousel " src="./book7.png "></img>
                  <img className="books-carousel " src="./book11.png "></img>
                  <img className="books-carousel " src="./book6.png "></img>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>
        <hr className="horizontal-line col-sm-8"></hr>
        


        <h2>About us</h2>
        <div className="lorem-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at fringilla nunc. Quisque a diam non augue eleifend facilisis eget eget felis.
         Praesent eget ex sit amet lacus gravida congue sed quis nulla. Pellentesque sodales maximus tempor. Vivamus semper quam sit amet consequat pellentesque. Integer tincidunt pellentesque augue, eget suscipit diam cursus eget. 
         Integer mattis lobortis tortor. Donec et commodo nibh,
         at egestas risus. Ut eu neque pulvinar, sodales eros sit amet, maximus quam. Integer at purus turpis. Cras dui lorem, pharetra quis urna eget, semper commodo nunc. Mauris ut justo lectus. Maecenas eu nisl venenatis, porttitor lorem vel, dictum risus.
         </p>
         <p>Mauris lobortis rutrum vehicula. Donec vestibulum orci et leo ullamcorper, eget congue dolor scelerisque. Nam dui massa, consectetur in elementum at, condimentum eu libero. Phasellus faucibus bibendum eros in fermentum. Vestibulum eu elit hendrerit, fermentum nunc ut, ultrices ante. Nulla commodo magna porta tempor sodales. Nulla at condimentum urna, vel eleifend nisi. Ut quam mi, semper varius tincidunt vel, suscipit nec ipsum. Praesent luctus ultrices mi sed suscipit. Mauris non nisi eu tortor laoreet mattis. Vestibulum euismod quam vel sem tincidunt, eu vulputate augue mollis. Nam dignissim molestie tellus, et rutrum est.</p>
         </div>
         </div>
    
      <footer id="footer">
      <i className="socials fa-brands fa-instagram"></i><i className="socials fa-brands fa-facebook"></i><i className="socials fa-brands fa-twitter"></i><i className=" socials fa-sharp fa-solid fa-envelope"></i>
      <p>© Copyright BooksApp</p>
  
    </footer>
  
      </div>
    
  );
}

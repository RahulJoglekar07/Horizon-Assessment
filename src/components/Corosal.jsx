import React from 'react'
import img1 from '../imags/codeimg1.jpg'
import img2 from '../imags/codeimg2.jpg'
import img3 from '../imags/codeimg3.jpg'

const Corosal = () => {
  return (
    <div>
       <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  height="500vh" src={img1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome to My Bank</h5>
              <p>My Bank Benifits and Help</p>
              <button class="btn btn-danger mr-1">Savings</button><button class="btn btn-primary">About My Bank</button><button class="btn btn-success ml-1">Benifits</button>
            </div>
          </div>
          <div class="carousel-item">
            <img height="500vh" src={img2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Welcome To My Bank</h5>
                <p>My Bank Benifits and Help</p>
              <button class="btn btn-danger mr-1">Savings</button><button class="btn btn-primary">About My Bank</button><button class="btn btn-success ml-1">Benifits</button>
                </div>
          </div>
          <div class="carousel-item">
            <img  height="500vh" src={img3} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Welcome to My Bank</h5>
                <p>My Bank Benifits and Help</p>
                <button class="btn btn-danger mr-1">Savings</button><button class="btn btn-primary">About My Bank</button><button class="btn btn-success ml-1">Benifits</button>
              </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Corosal

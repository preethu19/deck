import React from 'react';
import './cardTwo.css'


const CardTwo = (props) =>{
    return(
    <div class="col-lg-4 col-md-6 col-12">
      <div class="card card-inverse" style={{backgroundImage:`url(${props.thumbnailUrl}})`}}>
        <div class="card-img-overlay">
          <h4 class="card-title">{props.title}</h4>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas, quia commodi cumque at ad sunt ab  </p>
        </div>
      </div>
    </div>
    )
}

export default CardTwo;
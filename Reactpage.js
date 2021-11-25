
import React from "react";
import { FcAutomotive,FcLibrary } from "react-icons/fc";

function Page (){


    return(
        <div>
            <h1 className="text-center text-danger text-capitalize my-5">welcom to lahore <FcAutomotive/>  </h1>
            <div className="container">
  <div className="row">
    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/170/200"  class="card-img-top"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Title is here <FcLibrary/></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go </a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/170/201" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/170/202" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
        </div>   
    )
}
export default Page
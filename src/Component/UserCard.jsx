import React from 'react'
import Prop from "prop-types"
import "./File.css"
// import "./File1.css"


function UserCard({name,age,location,profilepic}) {
  return (<>
  <div className="backb">
  <div className="back">
    <div class="header">
    <img src={profilepic} alt="userphoto" />
    </div>

    <div class="right">
    <h1>{name}</h1>
    <p>Age: {age}</p>
    <p>Location: {location}</p>
    </div>
  </div>
  </div>
    </>
  )
}
export default UserCard;


UserCard.propTypes={
    name:Prop.string.isRequired,
    age:Prop.number.isRequired,
    location:Prop.string.isRequired,
    image:Prop.string.isRequired,
}


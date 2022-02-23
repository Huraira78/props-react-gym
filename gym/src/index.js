import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import logo from './logo.png'
import trainer1 from './t1.png'
import trainer2 from './t2.jpg'
import trainer3 from './t3.jpg'
function PropCom(){
  return  <div>
    <FirstCom Logoimg={logo} Name='Body Maker' trainer1img={trainer1} 
    trainer2img={trainer2}  trainer3img={trainer3}/>
  </div>
}
function FirstCom(props) {
  return <div>
    <nav>
      <div className="logo">
        <img src={props.Logoimg} alt="logo" />
      </div>
      <div className='menu'>
        <li>Home</li>
        <li>About</li>
        <li>Timing</li>
        <li>Contact Us</li>
      </div>
    </nav>
    <section>
      <h1>{props.Name}</h1>
      <div className="trainer">
        <div className="card1">
          <img src={props.trainer1img} alt="t1" />
          <h3>Trainer 1</h3>
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        </div>
        <div className="card1">
          <img src={props.trainer2img} alt="t2" />
          <h3>Trainer 2</h3>
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        </div>
        <div className="card1">
          <img src={props.trainer3img} alt="t3" />
          <h3>Trainer 3</h3>
          <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        </div>
      </div>
    </section>
    <footer>
      <p>GYM785@gmail.com</p>
      <h3>Address: Near ilqbal masjid lahore</h3>
    </footer>
  </div>
}
ReactDOM.render(<PropCom />, document.getElementById('root'))
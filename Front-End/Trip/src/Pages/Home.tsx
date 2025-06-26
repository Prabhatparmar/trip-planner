import React from 'react'
import './Home.css'
import Cards from '../components/Cards'
import place1 from '../assets/th (1).jpg'
import place2 from '../assets/th (2).jpg'
import place3 from '../assets/th (3).jpg'
import hotel1 from '../assets/th (5).jpg'
import hotel2 from '../assets/th (6).jpg'
import hotel3 from '../assets/th (7).jpg'
import restaurant1 from '../assets/th (8).jpg'
import restaurant2 from '../assets/th (9).jpg'
import restaurant3 from '../assets/th.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const DestinationHandler = () =>{
    navigate('/Destination');
  }
  return (
    <div>
        <header className="Home-navbar">
        <h1>Make My Trip</h1>
      </header>
      <div className="section">
        <h2>Top Places</h2>
        <div className="card-group">
          <Cards title="Taj Mahal" image={place1}/>
          <Cards title="Eiffel Tower" image={place2}/>
          <Cards title="Statue of Liberty" image={place3}/>
        </div>
      </div>
      <div className="section">
        <h2>Top Hotels</h2>
        <div className="card-group">
          <Cards title="The Oberoi" image={hotel1} />
          <Cards title="Taj Palace" image={hotel2} />
          <Cards title="Leela Palace" image={hotel3} />
        </div>
      </div>
      <div className="section">
        <h2>Top Resturants</h2>
        <div className="card-group">
          <Cards title="Bukhara" image={restaurant1} />
          <Cards title="Indian Accent" image={restaurant2} />
          <Cards title="Le Cirque" image={restaurant3} />
        </div>
      </div>
      <button onClick={() => DestinationHandler()}>Choose Destination</button>
    </div>
  )
}

export default Home
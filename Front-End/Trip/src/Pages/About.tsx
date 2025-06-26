import React from 'react';
import './About.css';
import img1 from '../assets/th (4).jpg';
import img2 from '../assets/th.jpg';
import placeImg from '../assets/th (6).jpg';
import hotelImg from '../assets/th (6).jpg';
import destinationImg from '../assets/th (8).jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const ListnerHandler = (): void => {
    navigate('/SignUp');
  };

  return (
    <div className="wrapper">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-content">
          <div className="image">
            <img src={img1} alt="Logo" />
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Destination</a></li>
            <li><a href="#">MyList</a></li>
          </ul>
          <div className="bttn">
            <button onClick={ListnerHandler}>Register</button>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="container">
        <div className="text">
          <h1>Welcome to MakeMyTrip</h1>
          <p>Your journey starts here. Discover, Plan, and Go!</p>
        </div>
        <div className="images">
          <img src={img2} alt="Main Travel" />
        </div>
      </div>

      {/* Top Places Section */}
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
      >
        <h2>Top Places</h2>
        <div className="section-content">
          <img src={placeImg} alt="Top Place" />
          <p>Explore the most breathtaking places across the country with our curated top picks for travelers.</p>
        </div>
      </motion.div>

      {/* Top Hotels Section */}
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
      >
        <h2>Top Hotels</h2>
        <div className="section-content">
          <img src={hotelImg} alt="Top Hotel" />
          <p>Enjoy luxurious stays and budget-friendly options handpicked for your comfort and convenience.</p>
        </div>
      </motion.div>

      {/* Top Destinations Section */}
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
      >
        <h2>Top Destinations</h2>
        <div className="section-content">
          <img src={destinationImg} alt="Top Destination" />
          <p>Discover trending destinations that are perfect for your next adventure or a relaxing getaway.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Globe, MapPin, Heart } from 'lucide-react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container animate-fade-in">
      <section className="hero-section flex-col items-center justify-center">
        <div className="hero-content text-center">
          <div className="badge glass-card inline-flex items-center gap-2">
            <Sparkles size={16} className="text-accent" />
            <span>AI-Powered Travel Discovery</span>
          </div>
          <h1 className="hero-title mt-6">
            Discover the World's <br />
            <span className="text-gradient">Hidden Wonders</span>
          </h1>
          <p className="hero-subtitle mt-6">
            Experience destinations like never before. Let our Generative AI craft personalized journeys, uncover authentic local cultures, and tell immersive stories.
          </p>
          <div className="hero-actions mt-8 flex justify-center gap-4">
            <button className="btn btn-primary" onClick={() => navigate('/discover')}>
              <Globe size={20} />
              Start Exploring
            </button>
          </div>
        </div>
      </section>

      <section className="features-section container">
        <h2 className="text-center mb-12">Why WanderVerse?</h2>
        <div className="grid features-grid gap-8">
          <div className="feature-card glass-card">
            <div className="feature-icon bg-primary-light">
              <MapPin size={24} className="text-primary" />
            </div>
            <h3>Hidden Gems</h3>
            <p>Our AI analyzes vast amounts of data to find breathtaking spots off the beaten path that traditional travel guides miss.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon bg-secondary-light">
              <Sparkles size={24} className="text-secondary" />
            </div>
            <h3>Immersive Stories</h3>
            <p>Don't just visit; experience. We generate rich, historically accurate narratives about the places you explore.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon bg-accent-light">
              <Heart size={24} className="text-accent" />
            </div>
            <h3>Local Culture</h3>
            <p>Connect with authentic traditions, events, and cuisines tailored to your interests and the current season.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

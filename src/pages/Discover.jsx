import React, { useState, useRef, useEffect } from 'react';
import { Search, Loader2, MapPin, Sparkles, Navigation } from 'lucide-react';
import { generateDestinationInfo } from '../services/aiService';
import './Discover.css';

const Discover = () => {
  const [destination, setDestination] = useState('');
  const [interests, setInterests] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const resultRef = useRef(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!destination.trim()) return;

    setLoading(true);
    setHasSearched(true);
    setResult('');

    // Simulate AI generation with streaming
    await generateDestinationInfo(destination, interests, (text) => {
      setResult(text);
    });

    setLoading(false);
  };

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollTop = resultRef.current.scrollHeight;
    }
  }, [result]);

  // Simple Markdown parser for the mock response
  const renderMarkdown = (text) => {
    if (!text) return null;
    
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-gradient mt-6">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('* **')) {
        const parts = line.split('**');
        return (
          <li key={index}>
            <strong>{parts[1]}</strong>{parts[2]}
          </li>
        );
      }
      if (line.startsWith('* ')) {
        return <li key={index}>{line.replace('* ', '')}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      // Handle bold in paragraph
      const paragraphParts = line.split('**');
      if (paragraphParts.length > 1) {
         return (
           <p key={index}>
             {paragraphParts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
           </p>
         )
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <div className="discover-container container animate-fade-in">
      <div className="search-header text-center">
        <h2>Where to Next?</h2>
        <p className="subtitle">Let AI craft your perfect cultural experience.</p>
      </div>

      <div className="search-box glass-panel">
        <form onSubmit={handleSearch} className="search-form">
          <div className="input-group">
            <MapPin className="input-icon text-primary" size={20} />
            <input
              type="text"
              className="input-glass"
              placeholder="Enter a destination (e.g., Kyoto, Rome, Bali)..."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <Sparkles className="input-icon text-secondary" size={20} />
            <input
              type="text"
              className="input-glass"
              placeholder="Specific interests? (e.g., Food, History, Nature)..."
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary search-btn" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Navigation size={20} />}
            {loading ? 'Discovering...' : 'Generate Journey'}
          </button>
        </form>
      </div>

      {hasSearched && (
        <div className="results-container glass-card mt-8 animate-fade-in" ref={resultRef}>
          <div className="ai-content">
            {renderMarkdown(result)}
            {loading && <span className="cursor-blink">|</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Discover;

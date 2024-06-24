// App.js
import React, { useState } from 'react';
import Timeline from './components/Timeline';
import EventCard from './components/EventCard';
import './App.css';

const aiEvents = [
  { id: 1, year: 1950, event: "Alan Turing proposes the Turing Test" },
  { id: 2, year: 1956, event: "Dartmouth Conference coins the term 'Artificial Intelligence'" },
  { id: 3, year: 1966, event: "ELIZA, an early natural language processing program, is created" },
  { id: 4, year: 1997, event: "IBM's Deep Blue defeats world chess champion Garry Kasparov" },
  { id: 5, year: 2011, event: "IBM Watson wins Jeopardy!" },
  { id: 6, year: 2014, event: "Eugene Goostman chatbot passes the Turing Test" },
  { id: 7, year: 2016, event: "Google's AlphaGo defeats world Go champion Lee Sedol" },
  { id: 8, year: 2022, event: "ChatGPT is released, showcasing advanced language capabilities" },
];

function App() {
  const [events, setEvents] = useState(aiEvents.sort(() => Math.random() - 0.5));
  const [placedEvents, setPlacedEvents] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleDrop = (event) => {
    setPlacedEvents([...placedEvents, event]);
    setEvents(events.filter(e => e.id !== event.id));
    checkOrder([...placedEvents, event]);
  };

  const checkOrder = (currentPlacedEvents) => {
    const isCorrect = currentPlacedEvents.every((event, index) => 
      index === 0 || event.year >= currentPlacedEvents[index - 1].year
    );

    if (isCorrect && currentPlacedEvents.length === aiEvents.length) {
      setFeedback("Congratulations! You've correctly ordered all AI events!");
    } else if (isCorrect) {
      setFeedback("Good job! Keep going!");
    } else {
      setFeedback("Oops! That's not quite right. Try again!");
    }
  };

  return (
    <div className="App">
      <h1>AI Time Traveler: Exploring the History of Artificial Intelligence</h1>
      <div className="game-container">
        <div className="event-list">
          {events.map(event => (
            <EventCard key={event.id} event={event} onDrop={handleDrop} />
          ))}
        </div>
        <Timeline placedEvents={placedEvents} />
      </div>
      <div className="feedback">{feedback}</div>
    </div>
  );
}

export default App;
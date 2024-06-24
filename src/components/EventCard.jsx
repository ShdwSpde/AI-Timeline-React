
// components/EventCard.js
import React from 'react';

function EventCard({ event, onDrop }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(event));
  };

  return (
    <div 
      className="event-card" 
      draggable 
      onDragStart={handleDragStart}
      onClick={() => onDrop(event)}
    >
      {event.event}
    </div>
  );
}

export default EventCard;
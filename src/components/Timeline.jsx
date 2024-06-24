
import React from 'react';

function Timeline({ placedEvents }) {
  return (
    <div className="timeline">
      {placedEvents.map((event, index) => (
        <div key={event.id} className="timeline-event">
          <div className="event-year">{event.year}</div>
          <div className="event-description">{event.event}</div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;

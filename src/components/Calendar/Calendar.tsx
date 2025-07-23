import React, { useEffect, useState } from 'react';
import './Calendar.css';

type Event = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
};

const Calendar = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/data/events.json');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const contentType = response.headers.get('content-type');
                if (!contentType?.includes('application/json')) {
                    throw new Error('Response is not JSON');
                }

                const data = await response.json();
                setEvents(data);
            } catch (err) {
                console.error('Error fetching events:', err);
                setError('Failed to load calendar events');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) return <div>Loading calendar...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="calendar">
            <h2>Office Calendar</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id} className="calendar-event">
                        <h3>{event.title}</h3>
                        <p><strong>When:</strong> {event.date} at {event.time}</p>
                        <p><strong>Where:</strong> {event.location}</p>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Calendar;
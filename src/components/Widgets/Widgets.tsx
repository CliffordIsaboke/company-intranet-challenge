import React, { useState } from 'react';

const Widgets = () => {
    const [widgets, setWidgets] = useState([
        { id: 1, name: 'Company News', visible: true },
        { id: 2, name: 'Quick Links', visible: true },
        { id: 3, name: 'Employee Directory', visible: true },
        { id: 4, name: 'Office Calendar', visible: true },
        { id: 5, name: 'Team Collaboration', visible: true },
    ]);

    interface Widget {
        id: number;
        name: string;
        visible: boolean;
    }

    const toggleWidgetVisibility = (id: number): void => {
        setWidgets(widgets.map((widget: Widget) => 
            widget.id === id ? { ...widget, visible: !widget.visible } : widget
        ));
    };

    return (
        <div className="widgets-container">
            {widgets.map(widget => (
                widget.visible && (
                    <div key={widget.id} className="widget">
                        <h2>{widget.name}</h2>
                        <button onClick={() => toggleWidgetVisibility(widget.id)}>
                            Toggle Visibility
                        </button>
                    </div>
                )
            ))}
        </div>
    );
};

export default Widgets;
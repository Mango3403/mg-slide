import React from 'react';
import './Slide.css';
// import styled from 'styled-components';

export default function Slide({ items }) {
  return (
    <ul className="slides">
      {items &&
        items.map((item) => (
          <input
            key={item.id}
            type="radio"
            name="control"
            id={`control-${item.id}`}
            defaultChecked={item.isChecked}
          />
        ))}
      {items &&
        items.map((item) => (
          <li key={item.id} className="slide">
            {item.src ? <img src={item.src} alt={item.text} /> : 1}
          </li>
        ))}

      <div className="controls-visible">
        {items &&
          items.map((item) => (
            <label key={item.id} htmlFor={`control-${item.id}`}></label>
          ))}
      </div>
    </ul>
  );
}

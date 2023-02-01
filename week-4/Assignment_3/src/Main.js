import React, { useState } from "react";

export const Welcome = () => {
  const [texts, setTexts] = useState("Welcome Message");

  return (
    <section className='welcome'>
      <h1 onClick={() => setTexts(!texts)}>{texts ? "Welcome Message" : "Have a Good Time!"}</h1>
    </section>
  );
};

export const Title = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className='section-title'>
      <h2>Section Title</h2>
      <Col data={[1, 2, 3, 4]} />
      <div className='btn' onClick={() => setIsVisible(!isVisible)}>
        Call to Action
      </div>
      {isVisible && <Col data={[5, 6, 7, 8]} />}
    </section>
  );
};

export const Col = (data) => {
  return (
    <div className='row'>
      {Object.values(data)[0].map((content, index) => (
        <div className='col' key={index}>
          <p>Content Box {content}</p>
        </div>
      ))}
    </div>
  );
};

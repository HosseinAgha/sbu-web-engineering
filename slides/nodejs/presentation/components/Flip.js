import React from 'react';

const Flip = (props) => {
  return (
    <div
      style={{
        display: 'inline-block',
        transform: 'scale(-1, 1)',
      }}
    >
      {props.children}
    </div>
  );
};

export default Flip;

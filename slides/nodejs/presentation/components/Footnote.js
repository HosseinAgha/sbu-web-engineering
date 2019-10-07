import React from 'react';

const Footnote = (props) => {
  return (
    <div
      style={{
        position: 'absolute',
        fontSize: '12px',
        bottom: '40px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Footnote;

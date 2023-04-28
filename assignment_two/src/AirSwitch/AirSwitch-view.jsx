import { useState } from 'react';
import './AirSwitch.css';

/**
 * Functional component to render AirSwitch.
 */
const AirSwitchView = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...props.style,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button
          className="vt-switch"
          onClick={props.toggleButtonState}
          ref={props.setButtonRef}
          style={{
            backgroundColor: props.buttonState ? '#447684' : '',
          }}
        >
          <span
            className="vt-switch-check"
            style={{
              left: 1 + props.buttonState * (props.switchWidth - 22),
              transform: props.buttonState ? 'scale(0.70,1)' : '',
              borderRadius: props.buttonState ? '40%' : '50%',
            }}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default AirSwitchView;

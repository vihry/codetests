import AirSwitch from '../AirSwitch/AirSwitch-cont';
import './PrefItem.css';

// VH: inline styles
const innerPanelStyle = {
  fontSize: '.8em',
  display: 'flex',
  backgroundColor: '#21262d',
  padding: '4px',
  borderRadius: '7px',
  width: '100%',
};
const labelStyle = {
  width: '100%',
  textAlign: 'left',
  margin: '0 0 0 0.5em',
};

/**
 * Single user preference item.
 * It uses @see AirSwitch
 *
 */
const PrefItem = (props) => {
  return (
    <div className="striplineClass">
      {/* VH: style destruturing example */}
      <div style={{ ...innerPanelStyle }}>
        {/* VH: other inline styling example */}
        <div style={labelStyle}>{props.label}</div>
        <div style={{ margin: '0 1em 0 0' }}>
          <AirSwitch value={props.value} onToggle={props.onToggle} />
        </div>
      </div>
      <div className="helpTextClass">{props.helpText}</div>
    </div>
  );
};

export default PrefItem;

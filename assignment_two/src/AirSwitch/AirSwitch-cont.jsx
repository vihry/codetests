import { Component } from 'react';
import AirSwitchView from './AirSwitch-view';

/**
 * AirSwitch controller to AirSwitchView.
 * It contains state and logic.
 */
class AirSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: props.value || 0 };
    this.toggleButtonState = this.toggleButtonState.bind(this);
    this.setButtonRef = this.setButtonRef.bind(this);
  }

  toggleButtonState() {
    this.setState((prev) => {
      const newButtonState = prev.buttonState ? 0 : 1;
      this.props.onToggle && this.props.onToggle(newButtonState);
      return { buttonState: newButtonState };
    });
  }

  setButtonRef(ref) {
    this.buttonRef = ref;
  }

  componentDidMount() {
    if (this.buttonRef) {
      // get width of button grip
      const rect = this.buttonRef.getBoundingClientRect();
      // set width on initial rendering step to use later
      this.setState({ switchWidth: rect.width });
    }
  }

  render() {
    const { buttonState, switchWidth } = this.state;
    return (
      <AirSwitchView
        style={this.props.style}
        setButtonRef={this.setButtonRef}
        switchWidth={switchWidth}
        label={this.props.label}
        helpText={this.props.helpText}
        buttonState={buttonState}
        toggleButtonState={this.toggleButtonState}
      />
    );
  }
}

export default AirSwitch;

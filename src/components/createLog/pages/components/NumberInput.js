import React from "react";
import "./NumberInput.css";

const Component = ({ input, meta, defaultText, label, showError = false }) => {
  const Er = meta.error && showError;
  const classname = `field container${Er ? " error" : ""}`;
  const onChangeChecker = (newInputValue) => {
    if (newInputValue > 0 && newInputValue < 100000)
      input.onChange(newInputValue);
  };
  return (
    <div className="ui form ">
      <div className={classname}>
        <label>{label}</label>
        <div className="ui icon input number-input">
          <input
            {...input}
            onChange={(e) => {
              onChangeChecker(Number(e.target.value));
            }}
            type="text"
            placeholder={defaultText}
            autoComplete="off"
          />
          <i
            className="icon plus"
            onClick={() => {
              onChangeChecker(Number(input.value) + 1);
            }}
          />
          <i
            className="icon minus"
            onClick={() => {
              onChangeChecker(Number(input.value) - 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};
class NumberInput extends React.Component {
  componentDidMount() {
    this.props.input.onChange(
      this.props.initNumber ? this.props.initNumber : 1
    );
  }
  render() {
    return <Component {...this.props} />;
  }
}

export default NumberInput;

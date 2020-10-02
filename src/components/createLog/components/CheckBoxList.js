import React from "react";

/////READ ME/////
// Must provide these props {input , list}
//list must be an array of objects with { value , label } attributes
//input is an object of { onChange(v) , value}
class CheckBoxList extends React.Component {
  chosen = [];
  componentDidUpdate() {
    if (!this.props.input.value) this.chosen = [];
    else this.chosen = JSON.parse(this.props.input.value);
  }
  render() {
    return this.props.list.map((chB, i) => {
      return (
        <div className="inline field" key={i}>
          <div className="ui checkbox">
            <input
              type="checkbox"
              onChange={(e) => {
                const T = e.currentTarget.checked;
                if (T) this.chosen.push(chB.value);
                else this.chosen = this.chosen.filter((vs) => vs !== chB.value);
                if (this.chosen.length === 0)
                  this.props.input.onChange(undefined);
                else this.props.input.onChange(JSON.stringify(this.chosen));
              }}
              checked={this.chosen.indexOf(chB.value) !== -1}
            />
            <label>{chB.label}</label>
          </div>
        </div>
      );
    });
  }
}

export default CheckBoxList;

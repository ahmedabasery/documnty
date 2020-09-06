import React from "react";
import { Field } from "redux-form";
import TextInput from "./TextInput";
import TextField from "./TextField";
import itemProperties from "../../itemsProperitiesConfiguration";

const NewItemFormStr = () => (
  <div className="ui grid">
    <div className="row">
      <div className="twelve wide column">
        <Field
          name={itemProperties.name}
          component={TextInput}
          label="item name"
          defaultText="name"
        />
      </div>
      <div className="four wide column">
        <Field
          name={itemProperties.q}
          component={TextInput}
          label="item quantity"
          defaultText="quantity"
        />
      </div>
      <div className="five wide column">
        <Field
          name={itemProperties.ref}
          component={TextInput}
          label="Reference"
          defaultText="reference"
        />
      </div>
      <div className="five wide column">
        <Field
          name={itemProperties.status}
          component={TextInput}
          label="Item status"
          defaultText="status ..."
        />
      </div>
      <div className="six wide column">
        <Field
          name={itemProperties.for}
          component={TextInput}
          label="Reasons"
          defaultText="for ..."
        />
      </div>
      <div className="sixteen wide column">
        <Field
          name={itemProperties.desc}
          component={TextField}
          label="Item Description"
          rows="2"
        />
      </div>
    </div>
  </div>
);

export default NewItemFormStr;

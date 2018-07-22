import React, { Component } from "react";
import { reduxForm, Field, FieldArray } from "redux-form";
import update from "react-addons-update";
import CheckField from "./CheckField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

const q3Options = [
  "PHP",
  "Ruby on Rails",
  "Python",
  "NodeJS",
  "ReactJS",
  "AngularJS",
  "WordPress",
  "Magento",
  "Woocommerce",
  "Don't know"
];

let counter = -1;

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.changeVal = this.changeVal.bind(this);
  }

  state = {
    q3: this.initialzeState()
  };

  initialzeState() {
    let temp = [];
    for (let i = 0; i < q3Options.length; i++) {
      temp.push("");
    }
    return temp;
  }

  renderCheckboxes({ input, handler, qState }) {
    const { name } = input;
    console.log(input);
    input.onChange(qState);
    return (
      <FormGroup>
        {q3Options.map(option => {
          return (
            <FormControlLabel
              key={counter}
              control={
                <CheckField
                  option={option}
                  name={name}
                  changeVal={handler}
                  id={counter++}
                />
              }
              label={option}
            />
          );
        })}
      </FormGroup>
    );
  }

  changeVal(id, val, name) {
    this.setState({
      [name]: update(this.state[name], {
        [id]: { $set: val }
      })
    });
  }

  onSurveySubmit(values) {
    console.log(values);
    // this.props.newProject(values, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSurveySubmit.bind(this))}>
        <FormLabel variant="subheading">
          4. Do you have a preference of technology? Tick all that apply
        </FormLabel>
        <Field
          name="q3"
          handler={this.changeVal}
          qState={this.state.q3}
          component={this.renderCheckboxes}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "newProjForm"
})(NewProject);

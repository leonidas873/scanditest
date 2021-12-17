import React from "react";
import "./steps.css";
import {BsCheck2} from 'react-icons/bs';

class Steps extends React.Component {

    state={
        stepsDone:[]
    }
    componentWillMount() {
        const {stepsDone} = this.state;
        Object.keys(this.props.steps)
          .filter((elem) => elem !== "DETAILS_STEP")
          .map((elem, index) => {
        window.location.href.includes(this.props.steps[elem]["url"]) ? this.setState({stepsDone:[...stepsDone,this.props.steps[elem]["url"]]}) :""})
      }

  renderSteps = () => {
    
    return (
      <div className="steps-wrapper">
        {" "}
        {Object.keys(this.props.steps)
          .filter((elem) => elem !== "DETAILS_STEP")
          .map((elem, index) => (
            <div className={"single-step " +(index!=0 ? "flex1" : "" )}>
              {index!=0 && <div className={"step-line" + (this.state.stepsDone.includes(this.props.steps[elem]["url"]) ? " step-line--red" : "")}>
              </div>}
              
              <div classNAme="step-container">
                  <p className="step-num"> {index + 1}</p>
                  <h5 className="step-title">{this.props.steps[elem]["title"]}</h5>
                </div>
            </div>
          ))}
      </div>
    );
  };

  render() {

    
    return <div className="steps">
        <div className="red-line"></div>
        {this.renderSteps()}
        <div className="gray-line"></div>
        </div>;
  }
}

export default Steps;

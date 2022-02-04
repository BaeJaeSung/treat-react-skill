import { Component } from "react";
import { usePrompt } from "./blocker";

class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleGoHome = () => {
    this.props.history.push("/");
  };
  componentDidMount = () => {
    //this.unblock = usePrompt("현재 페이지를 벗어나시겠습니까?", true);
  };
  componentWillUnmount = () => {
    if (this.unblock) {
      this.unblock();
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>back</button>
        <button onClick={this.handleGoHome}>home</button>
      </div>
    );
  }
}

export default HistorySample;

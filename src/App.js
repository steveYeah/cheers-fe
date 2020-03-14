import React from "react";
import Toast from "./components/toast";

const URL = process.env.REACT_APP_API_URL;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toast: null,
      isLoading: false,
      error: null
    };
  }

  render() {
    return (
      <Toast
        toast={this.state.toast}
        isLoading={this.state.isLoading}
        error={this.state.error}
        onClick={() => this.callApi()}
      />
    );
  }

  componentDidMount() {
    this.callApi();
  }

  callApi() {
    this.setState({ isLoading: true });

    fetch(URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Received ${res.status}: ${res.statusText}`);
        }
      })
      .then(data => {
        this.setState({
          toast: data,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });
  }
}

export default App;

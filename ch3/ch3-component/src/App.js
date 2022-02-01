import { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button
          onClick={() => {
            this.ScrollBox.scrollToBottom();
          }}
        >
          go to bottom
        </button>
      </div>
    );
  }
}

export default App;

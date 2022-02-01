// import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       나의 name is {name} <br />
//       child val is {children}
//       <br />
//       favorite number : {favoriteNumber}
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: 'basic name',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

// export default MyComponent;
import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        나의 name is {name} <br />
        child val is {children}
        <br />
        favorite number : {favoriteNumber}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: 'basic name',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;

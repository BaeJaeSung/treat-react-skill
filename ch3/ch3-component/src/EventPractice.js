import { Component } from 'react';
import { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  console.log(form);
  const [username, message] = [form.username, form.message];
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1> event practice </h1>
      <input
        type="text"
        name="username"
        placeholder="type username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="type message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>confirm</button>
    </div>
  );
};

// class EventPractice extends Component {
//   state = {
//     username: '',
//     message: '',
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1> event practice </h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="type username"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="type message"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>confirm</button>
//       </div>
//     );
//   }
// }

export default EventPractice;

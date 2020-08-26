import React from 'react';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="input-field">
            <input id="email" type="text" className="validate" />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="input-field">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password:</label>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;

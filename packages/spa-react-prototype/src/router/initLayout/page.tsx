import React from 'react';
import logo from '../../assets/temp.jpg';
import './style.scss';
import { connect } from 'react-redux';

// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)
function App(props: any) {
  function changeName() {
    const { dispatch } = props;
    dispatch({
      type: 'lwq/setName',
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" onClick={changeName} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.lwq.name}
        </a>
      </header>
    </div>
  );
}

export default connect((store: any) => {
  const { lwq } = store;
  return {
    lwq,
  };
})(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import { useSagaAndUseConnectedReactRouter } from './actions/homeAction';

//import asyncComponent from './components/AsyncComponent';
//聆听翻译 另外，我们在这里传递一个函数似乎很奇怪。
//为什么不直接传入一个字符串（比如./ containers / Home）
//然后在AsyncComponent中执行动态import（）？这是因为我们想要明确说明我们动态导入的组件。
//Webpack基于此分割我们的应用程序。它查看这些导入并生成所需的部分（或块）。

//const AsyncHome = asyncComponent(() => import("./containers/Home"));

import './App.css';

class App extends Component {
  handleClick = path => {
    console.log(this.props.pushPath);

    this.props.pushPath(path);
    // import('./moduleA.js')
    //   .then(({ moduleA }) => {
    //     console.log(moduleA);
    //   })
    //   .catch(ree => {
    //     console.log(ree);
    //   });
  };

  render() {
    const { pushPath } = this.props;
    return (
      <div className="App">
        <Helmet>
          <title>Nested Title</title>
          <meta name="description" content="Nested component" />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.handleClick}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro" onClick={() => this.handleClick('/')}>
          /
        </p>
        <p className="App-intro" onClick={() => this.handleClick('/home')}>
          home
        </p>
        <p className="App-intro" onClick={() => this.handleClick('/app')}>
          app
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // pathname: state.router.location.pathname,
  // search: state.router.location.search,
  // hash: state.router.location.hash,
  // router: state.router
});
const mapDispatchToProps = dispatch => {
  return {
    pushPath: path => dispatch(useSagaAndUseConnectedReactRouter(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

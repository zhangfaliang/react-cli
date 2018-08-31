import React, { Component } from 'react';
import { widthRouter, BrowserRouter, Route, Link } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

const ScrollToTopRouter = widthRouter(ScrollToTop);

const ScrollToTopExample = () => (
  <BrowserRouter>
    <Route>
      <ScrollToTop>
        <ScrollToTopExample />
      </ScrollToTop>
    </Route>
    <Route path="/" component={ScrollToTopExample} />
  </BrowserRouter>
);

class ScrollToTopOnMount extends Component {
  componentDidUpdate() {
    window.scroll();
  }
  render() {
    return null;
  }
}

class LongContent extends Component {
  render() {
    <div>
      <ScrollToTopOnMount />
      <h1>Here is my long content page </h1>
    </div>;
  }
}
export default ScrollToTopExample;

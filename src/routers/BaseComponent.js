import { Route, Switch, BrowserRouter, Link, NavLink } from 'react-router-dom';
import React from 'react';
{
  /* <Route path='/about' component={() => 'About'} />
<Route path='/contact' component={() => 'Contact'} /> */
}

const Home = () => (
  <div>
    Home
    <Link to="/contact">Contact</Link>
    <NavLink to="/about" activeClassName="44">
      {' '}
      About
    </NavLink>
  </div>
);
const About = props => {
  console.log(props, 'About');

  return <div>About</div>;
};
const Contact = props => {
  console.log(props, 'Contact');

  return <div>Contact</div>;
};
const BaseComponent = () => {
  const someVariable = true;
  //Switch 将将迭代其所有子route元素 并仅渲染与当前位置匹配的第一个子元素当多个路径的路径匹配相同的路径名，动画路径之间的转换，以及识别何时没有路径与当前位置匹配（这样您可以渲染“404”组件）时，这会有所帮助
  return (
    <BrowserRouter>
      <Switch>
        {/* these are good */}
        <Route exact path="/" component={Home} />
        <Route
          path="/about"
          render={props => <About {...props} extra={someVariable} />}
        />
        {/* do not do this */}
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};
//对于给定<Route>的呈现方式，您有三个prop选项：component, render, and children.
//component and render because those are the two you will almost always use.

export default BaseComponent;
// 当您具有要呈现的现有组件（React.Component或无状态功能组件）时，应使用该组件。渲染，
// 只有在必须将范围内变量传递给要渲染的组件时，才应使用内联函数
// 您不应该使用带有内联函数的组件prop来传递范围内变量，因为您将获得不需要的组件卸载/重新安装。

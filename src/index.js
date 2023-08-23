//1、引入React两个核心模块
import React from 'react';
import ReactDOM from 'react-dom';
// import 'reset-css';
import 'lib-flexible';
import './global.less'
import BaseRouter from './router'
import { Provider } from 'react-redux'
import store from './store'


//2、通过JSX语法将组件/标签渲染到指定标签上

ReactDOM.render(
  <Provider store={store}>
    <BaseRouter />
  </Provider>
  , document.getElementById('root'));



import { Component } from 'react';

export default class Page extends Component {
  static async getInitialProps() {
    console.log('getInitialProps page');
    return new Promise(resolve => setTimeout(() => resolve({}), 2 * 1000));
  }
  render() {
    console.log('render page');
    return <div>Page</div>;
  }
}

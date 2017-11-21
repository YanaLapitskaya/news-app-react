import React, { Component } from 'react';
import News from './News.js';
import AddNews from './AddNews.js';
import ee from '../EventEmitter';

let my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      news: my_news
    };
  }

  componentDidMount(){
    ee.on('News.add', (item)=>{
      let nextNews = item.concat(this.state.news);
      this.setState({news: nextNews});
    });
  }

  componentWillUnmount(){
    ee.removeListener('News.add');
  }

  render() {
    return (
      <div className="app">
        <AddNews/>
        <h3>Новости</h3>
        <News data={this.state.news}/>
      </div>
    );
  }
};

export default App;

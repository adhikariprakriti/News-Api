import React,{Component} from 'react';
import classes from './App.module.css';
import News from './components/News';

class App extends Component {

constructor(props){
  super(props);
  this.state={
    articlesdata:[]
  }
}


  componentDidMount(){
    fetch('http://newsapi.org/v2/everything?' +
          'sources=bbc-news&'+
          'pageSize=4&'+
          'q=racism&'+
          'apiKey=d48cbb07f9aa42eca80458ee5b7dfd0e'

)
  .then(response => response.json())
  .then((data) =>{
     this.setState({
       articlesdata:data.articles
     })
  });


  }
  render(){
    console.log(this.state);
  return (
    <div className={classes.App}>
      <div className={classes.container}>
        <h1>Latest News</h1>
        {this.state.articlesdata.map((item,index)=>{
          return(
          <News title={item.title}
                description={item.description}
                key={index} 
                img={item.urlToImage}
                href={item.url}
                />
          );
        })}
        
      </div>
    </div>
  );
  }
}

export default App;




/* d48cbb07f9aa42eca80458ee5b7dfd0e


fetch('http://newsapi.org/v2/everything?' +
          'sources=bbc-news&'+
          'pageSize=4&'+
          'q=racism&'+
          'apiKey=d48cbb07f9aa42eca80458ee5b7dfd0e'

)
  .then(response => response.json())
  .then(data => console.log(data));




*/


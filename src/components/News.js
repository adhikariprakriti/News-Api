import React from 'react';
import classes from './News.module.css';

function News(props){
   return(
       <div className={classes.box}> 
          <img src={props.img} alt="" className={classes.cardimage}></img>
           <h1 className={classes.boxtitle}>{props.title}</h1>
          <p className={classes.description}>{props.description}</p>
          <a class={classes.button}  href={props.href}  onClick={props.clicked}>Read More</a>
        </div>  
    );
}

export default News;
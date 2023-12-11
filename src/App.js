
import './App.css';
import { useEffect,useState } from 'react';
import News from './News';

function App() {

let [articles,setArticles]=useState([]);
let [category,setCategory]=useState("india")
let [date,setDate]=useState(new Date());

  useEffect(()=>{
     fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&apiKey=aa5d473d14cf4b59af12f4ef64ec40dd`)
     .then((response)=>response.json())
     .then((news)=>{
      setArticles(news.articles);
     })
     .catch((err)=>{
      console.log(err);
     })
  },[category,date])
  return (
    <div className="App">
      <header className='header'>
        <h1>Indian News</h1>
        <input type='text' onChange={(event)=>{
          if(event.target.value!=="")
          {
          setCategory(event.target.value);
          }else{
            setCategory("india");
          }
        }}placeholder='Search News'></input>
        <input type='date' onChange={(event)=>{
        if(event.target.value!=="")
        {
        setDate(event.target.value);
        }
        else
        {
        setDate(new Date());
        }
      }} placeholder='Enter Date'></input>
        </header>
      <section className='news-articles'>
        {
          articles.length!==0?
          articles.map((article)=>{
            return(
              <News article={article}/>
            )
          })
          :
          <h3>No news Found For Searched Text</h3>
        }
      
      </section>
    </div>
  );
}

export default App;

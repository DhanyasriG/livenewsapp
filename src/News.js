export default function News(props){
    return(
        <div className="news">
            <div className="news-img">
                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage} alt=''/>:
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTEghTW2XOwmp-PbaaC76eKvC7jH61oZfDQ&usqp=CAU" alt=''/>
                    
                }
                
                </div>
             <h1>{props.article.title}</h1>
             <p>{props.article.description?.substring(0,100).concat("....")}<a href={props.article.url} target='_blank'>Read more</a></p>   
             
             <div className="source">
                <p>Author: {props.article.author}</p>
                <p>{props.article.source.name}</p>
             </div>
        </div>
    )
}
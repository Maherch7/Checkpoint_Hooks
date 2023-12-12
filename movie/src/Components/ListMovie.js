import CardMovie from "./CardMovie"

const ListMovie=({movies,search,stars})=>{

    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase())&& el.rating >= stars)
    return(
        <div className="cards">
           {
            
            
            x.length == 0 ? <h1>Not Found</h1> : x.map((el,i,t)=> <CardMovie el={el}/>)
           }
        </div>
    )
}





export default ListMovie
import React ,{useState ,useEffect}from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsContainer =(props)=>{
  const [artical,setArtical]=useState([]);
  const [loading,setLoading]=useState(false);
  const [page,setPage]=useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const update=async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3d057fe458b14fbdb3139aceebcfbe95&page=${page}&pageSize=${props.PageSize}`;
    props.setProgress(30);
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(60);
    let pasredata = await data.json();
    props.setProgress(90);
    console.log(pasredata);
    setArtical(pasredata.articles);
    setTotalResults(pasredata.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(() => {
    document.title=`${props.category.slice(0, 1).toUpperCase().concat(props.category.slice(1))} - NewsWar`
    update();

  }, [])
  
  const fetchData=async ()=>{
   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3d057fe458b14fbdb3139aceebcfbe95&page=${page+1}&pageSize=${props.PageSize}`;
    setPage(page+1);
    setLoading(true);
    let data = await fetch(url);
    let pasredata = await data.json();
    console.log(pasredata);
    setArtical(artical.concat(pasredata.articles));
    setTotalResults(pasredata.totalResults);
    setLoading(false);
  }
    return (

      <div>

        <div className="container my-2">
          <div style={{marginTop:'65px'}}>
          <h2 className='text-center my-3'>NewsWar -  {props.category === 'general' ? 'Top Highlights' : `${props.category.slice(0, 1).toUpperCase().concat(props.category.slice(1))} News`}</h2>
          </div>
           <InfiniteScroll className="container"
            dataLength={artical.length}
            next={fetchData}
            hasMore={artical.length<=totalResults}
            loader={loading && <Spinner />}
            >
            {<div className="row">
              {artical?.map((e,index) => {
                return (
                  <div className="col-md-4 my-2" key={index}>
                    <NewsItem title={e.title ? e.title.slice(0, 40) : " "} description={e.description ? e.description.slice(0, 90) : " "} ImageUrl={e.urlToImage} newsUrl={e.url} author={e.author ? e.author : "Unknown"} date={e.publishedAt} brand={e.source.name} />
                  </div>
                );
              })}
            </div>}

          </InfiniteScroll>
        </div>

        
      </div>
    )
  }

NewsContainer.defaultProps = {
  country: 'in',
  PageSize: 5,
  category: 'general'
}
NewsContainer.propTypes = {
  country: PropTypes.string,
  PageSize: PropTypes.number,
  category: PropTypes.string
}

export default NewsContainer;
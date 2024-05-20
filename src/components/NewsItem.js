import React from 'react';

const NewsItem=(props)=> {

  
    let { title, description, ImageUrl, newsUrl, author, date, brand } =props;
    return (
      <div>
        <div className="card h-100" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '18%' }}>
            {brand}</span>
          <img src={!ImageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7oka1Shx4WugBk4022ecxU6_3yZg6QLYLw&usqp=CAU" : ImageUrl} className="card-img-top" alt="..." style={{ height: '13rem' }} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">by {author} posted on {(new Date(date)).toDateString()}</small></p>

            <a href={newsUrl} rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }

export default NewsItem;
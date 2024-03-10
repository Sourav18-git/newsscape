import React from 'react'

export default function NewsItem(props) {
    return (
        <>
            <div className="card my-3" >
            
  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex :'1'}}>
{props.source}
</span>
                <img src={props.imageUrl} className="card-img-top" alt="..." style={{height:"240px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className='card-text'><small className='text-muted'>By {props.author? props.author: "Unknown"}</small></p>
                    <a href={props.newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        </>
    )
}

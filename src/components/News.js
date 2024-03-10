import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default function News(props) {


    const [content, setContent] = useState(
        []
    )
    const [totalArticle, settotalArticle] = useState()

    const [page, setPage] = useState(1)

    const [loader, setLoader] = useState(true);

    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=dad08aa90896484a810614e10e31a7f9&page=${page}&pageSize=${props.pagesize}`
    const Noimage = "https://media.istockphoto.com/id/1472933890/vector/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?s=612x612&w=0&k=20&c=Rdn-lecwAj8ciQEccm0Ep2RX50FCuUJOaEM8qQjiLL0="

    const handleNextClick = async () => {
        if (page > Math.ceil(totalArticle / 20)) {
            console.log("end")
        }

        else {
            const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=dad08aa90896484a810614e10e31a7f9&page=${page}&pageSize=${props.pagesize}`

            setTimeout(() => {
                setLoader(false);
            }, 2000);
            fetch(url)
                .then(async (result) => {
                    // setLoader(true)
                    let res = await result.json()

                    setContent(res.articles)
                    settotalArticle(res.totalResults)
                    // setLoader(false)
                    setPage(page + 1)
                })
                .catch(err => console.log(err))



        }
    }
    const handlePreviousClick = async () => {
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=dad08aa90896484a810614e10e31a7f9&page=${page}&pageSize=20`
        setTimeout(() => {
            setLoader(false);
        }, 2000);
        fetch(url)
            .then(async (result) => {
                // setLoader(true)
                let res = await result.json()
                setContent(res.articles)
                // setLoader(false)
                setPage(page - 1)
            })
            .catch(err => console.log(err))



    }



    useEffect(() => {

        setTimeout(() => {
            setLoader(false);
        }, 2000);
        fetch(url)
            .then(async (result) => {
                // setLoader(true)
                let res = await result.json()
                setContent(res.articles)
                // setLoader(false)
            })

            .catch(err => console.log(err))

    }, []);


    return (
        <div>
            <h2 className="text-center" style={{ marginTop: "40px", marginBottom: "10px" }}>Top Headlines - {props.category} </h2>

            {loader && <Spinner />}
            <div className="container">

                <div className="row ">

                    {!loader && content.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : Noimage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}  />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-dark" type='button' onClick={handlePreviousClick} disabled={page <= 1}>&larr;Previous</button>
                    <button className="btn btn-dark" type='button' onClick={handleNextClick} disabled={page > Math.ceil(totalArticle / 20)}>Next &rarr; </button>
                </div>
            </div>
        </div>
    )
}

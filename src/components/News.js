import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'

export default function News() {
    let article = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters.com",
            "title": "North Korea vows military strike if any provocation, fires artillery rounds - Reuters.com",
            "description": " ",
            "url": "https://www.reuters.com/world/asia-pacific/north-koreas-kim-yo-jong-vows-immediate-response-provocation-kcna-2024-01-07/",
            "urlToImage": " ",
            "publishedAt": "2024-01-07T10:38:00Z",
            "content": " "
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Niha Masih, Jennifer Hassan, John Hudson, Yasmeen Abutaleb, Shane Harris",
            "title": "Israel-Gaza war live updates: Blinken in Middle East as U.S. seeks to avert war between Israel and Hezbollah - The Washington Post",
            "description": "The secretary of state’s tour is part of the U.S. effort to avoid regional escalation, in particular a war between Israel and the militant group in Lebanon.",
            "url": "https://www.washingtonpost.com/world/2024/01/07/israel-hamas-war-gaza-news-palestine/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/01-07-2024/t_542a740c3bec4840811b74a7f8030823_name_UG3Y5CBFJHTU37IQY74PED45AE.jpg&w=1440",
            "publishedAt": "2024-01-07T09:56:15Z",
            "content": " "
        },
        {
            "source": {
                "id": " ",
                "name": "SciTechDaily"
            },
            "author": " ",
            "title": "Astronomical Illusions: New Images Reveal What Neptune and Uranus Really Look Like - SciTechDaily",
            "description": "Recent research led by Professor Patrick Irwin shows that Neptune and Uranus are both a similar shade of greenish-blue, challenging previous perceptions of their colors. The study used modern telescopic data to correct historical color inaccuracies and explai…",
            "url": "https://scitechdaily.com/astronomical-illusions-new-images-reveal-what-neptune-and-uranus-really-look-like/",
            "urlToImage": "https://scitechdaily.com/images/Neptune-and-Uranus-True-Colors.jpg",
            "publishedAt": "2024-01-07T09:42:41Z",
            "content": "A study reveals Neptune and Uranus are both greenish-blue, not the deep azure and pale cyan previously believed. Modern telescope data was used to correct these historical color misrepresentations. C… [+8848 chars]"
        },
        {
            "source": {
                "id": " ",
                "name": "Cointelegraph"
            },
            "author": "Cointelegraph",
            "title": "Bitcoin ETFs will solve unit bias psychology, says VanEck adviser - Cointelegraph",
            "description": " ",
            "url": "https://cointelegraph.com/news/bitcoin-etf-unit-bias-psychology-vaneck",
            "urlToImage": " ",
            "publishedAt": "2024-01-07T08:43:06Z",
            "content": " "
        }
    ]
    const [state] = useState({
        article: article,
        loading: false

    })

   const url="https://newsapi.org/v2/top-headlines?country=in&apiKey=dad08aa90896484a810614e10e31a7f9"
  
 
    const url1 = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState( {article: article,
        loading: false});
  

  console.log(setData)
  
    useEffect(() => {

        fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
        .catch(err=>console.log(err))
    }, []);
  
    
    return (
        <div>
            <div className="container">

                {/* <div className="row ">
                  
                      {data.map((element) => { 
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem  title={element.title? element.title.slice(1,45):" "}description={ element.description? element.description.slice(0,88):""}imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div> */}
                <ul>
                    {data.article.map((list,index)=>(
                     <li key={index}>{list.url}</li>   
                   ) )}
                </ul>
            </div>
        </div>
    )
}

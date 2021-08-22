import React, { useEffect, useState } from "react"
import axios from "axios"
import CardComp from "./Card"
import "./NewsContext.css"

function NewsContext(props) {
    // const url =
    //     "https://newsapi.org/v2/top-headlines?country=in&apiKey=a8d48326a27c46bb9838a655f18b2b54"

    // const url =
    //     "http://api.mediastack.com/v1/news?access_key=57f3d9e30bb445b1d9092b05c2169eac&country=in&sources=en&limit=100"

    const url = "https://saurav.tech/NewsAPI/everything/cnn.json"
    const [data, setData] = useState(null)
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data.articles)
                setData(response.data.articles)
            })
            .catch((err) => console.log(err.message))
    }, [])
    return (
        <div className="main">
            {data && data.length > 0 ? (
                data.map((row) => <CardComp key={row.url} data={row} />)
            ) : (
                <p style={{ color: "gray" }}>Loading...</p>
            )}
        </div>
    )
}

export default NewsContext

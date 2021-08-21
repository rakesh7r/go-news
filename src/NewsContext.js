import React, { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import CardComp from "./Card"
import "./NewsContext.css"

const userContext = createContext()

function NewsContext(props) {
    const url =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=a8d48326a27c46bb9838a655f18b2b54"
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
            {data && data.length > 0
                ? data.map((row) => <CardComp key={row.url} data={row} />)
                : null}
        </div>
    )
}

export default NewsContext

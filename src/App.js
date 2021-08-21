import "./App.css"
import { createContext } from "react"
import NewsContext from "./NewsContext"

export const Context = createContext()

function App() {
    return (
        <div>
            <header className="header">
                <h1>NewsGo</h1>
            </header>
            <NewsContext />
        </div>
    )
}

export default App

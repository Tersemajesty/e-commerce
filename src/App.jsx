import "./App.css"
import Header from "./component/Header/Header"
import Body from "./component/Body/Body"
import HeroPage from "./component/HeroPage/HeroPage"

const App = () => {

    
    return (
        <div className="app">
            <Header  />
            <Body />
            <HeroPage/>
        </div>
    )
}

export default App
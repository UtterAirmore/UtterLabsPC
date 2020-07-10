import React from "react"
import {Route, Routes} from "react-router-dom";

import NavigationBar from "./Navbar/Navbar"
import Main from "./Main/Main"
import Shop from "./Shop/Shop"
import About from "./About/About"
import BuildPage from "./BuildPage/BuildPage"

function App() {

    const url= "Tier-3";

    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/gaming">
                    <Route path="/" element={<Shop type="Gaming" />} />
                    <Route path="/:name" element={<BuildPage type="gaming" name={url}/>} />
                </Route>
                <Route path="/special">
                    <Route path="/" element={<Shop type="Special" />} />
                    <Route path="/:name" element={<BuildPage type="special" name={url} />} />
                </Route>
                <Route path="/special">
                    <Route path="/:name" element={<BuildPage type="special" name={url} />} />
                </Route>
                <Route path="/studio" >
                    <Route path="/" element={<Shop type="Studio" />} />
                    <Route path="/:name" element={<BuildPage type="studio" name={url}/>} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Main />} />
            </Routes>
            
        </div>
    )
}

export default App
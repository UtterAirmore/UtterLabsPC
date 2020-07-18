import React from "react"
import {Route, Routes} from "react-router-dom";

import NavigationBar from "./Navbar/Navbar"
import Main from "./Main/Main"
import Shop from "./Shop/Shop"
import About from "./About/About"
import NewBuildPage from "./BuildPage/NewBuildPage"

function App() {

    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/gaming">
                    <Route path="/" element={<Shop type="Gaming" />} />
                    <Route path="/:name" element={<NewBuildPage type="gaming" />} />
                </Route>
                <Route path="/special">
                    <Route path="/" element={<Shop type="Special" />} />
                    <Route path="/:name" element={<NewBuildPage type="special" />} />
                </Route>
                <Route path="/studio" >
                    <Route path="/" element={<Shop type="Studio" />} />
                    <Route path="/:name" element={<NewBuildPage type="studio" />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Main />} />
            </Routes>
            
        </div>
    )
}

export default App
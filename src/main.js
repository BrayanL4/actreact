import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FCCF from "./components/FC";
import Form from "./components/Form";
import {Operation} from "./components/SM";

import { Menu } from "./menu";

export default function Main(){
    return(
        <Router>
            <Routes>
                <Route extract path='/' element={<Menu/>} />
                <Route extract path='/SM' element={<Operation/>}/>
                <Route extract path='/FC' element={<FCCF/>}/>
                <Route extract path='/form' element={<Form/>}/>
            </Routes>
        </Router>
    )
}

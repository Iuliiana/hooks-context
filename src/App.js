import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Homepage} from "./pages/Homepage";
import {Notfoundpage} from "./pages/Notfoundpage";
import {Layout} from "./components/Layout";
import {Users} from "./pages/Users";
import {HookExamples} from "./pages/HookExamples";


function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='users' element={<Users/>}/>
                <Route path='hook-examples' element={<HookExamples/>}/>
                <Route path='*' element={<Notfoundpage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
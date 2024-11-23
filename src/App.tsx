import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmailScreen from "./screens/email";
import HomeScreen from "./screens/home";
import Door from "./screens/door";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/email' element={<EmailScreen />} />
                    <Route path='/door' element={<Door />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;

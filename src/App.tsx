import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import EmailScreen from "./screens/email";
import HomeScreen from "./screens/home";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/email' element={<EmailScreen />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;

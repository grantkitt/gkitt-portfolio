import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./screens/home";
import EmailScreen from "./components/email";

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

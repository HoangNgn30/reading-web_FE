import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = route.layout;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <route.component />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;

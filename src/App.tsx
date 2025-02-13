import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import React from 'react';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout =
                            route.layout || (({ children }: { children: React.ReactNode }) => <>{children}</>);
                        const Component = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

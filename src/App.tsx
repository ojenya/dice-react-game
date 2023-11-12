import { HashRouter, Route, Routes } from "react-router-dom";
import { routes, routesConfig } from "./routes";
import { Layout } from "./components/Layout/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HashRouter>
        <Layout>
          <Routes>
            {routes.slice(1).map((route) => (
              <Route
                key={route}
                path={route}
                element={routesConfig[route].element}
              />
            ))}
            {routes.length && (
              <Route path={"*"} element={routesConfig[routes[0]].element} />
            )}
          </Routes>
        </Layout>
        <Toaster />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { CountriesSection } from "./components/Countries/CountriesSection";
import { Country } from "./components/Country/Country";
import { ThemeContext } from "./contexts/ThemeContextProvider";
import { Layout } from "./layout/Layout";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className='App' data-theme={theme.theme}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CountriesSection />} />
          <Route path='countries-search/*' element={<CountriesSection />} />
          <Route path=':name' element={<Country />} />
          <Route path='countries-search/:name' element={<Country />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

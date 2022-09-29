import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './Layout'
import { Home, Add, Artists, Artist, NotFound } from './Pages'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="artists" element={<Artists />}>
          <Route path=":name" element={<Artist />}></Route>
        </Route>
        <Route path="add" element={<Add />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      
      <Footer />
      </div>
    </div>
  );
}

export default App;

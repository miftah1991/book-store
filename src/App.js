import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/bookstore/books" element={<Books />} />
          <Route path="/bookstore/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

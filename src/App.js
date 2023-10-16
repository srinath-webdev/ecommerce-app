
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import store from './Utils/Store';
import Footer from './components/Footer';


function App() {
  return (
    <div className="px-10">
      <Provider store={store}>
      <Header/>
      <ProductList />
      <Footer />
      </Provider>
    </div>
    
  );
}

export default App;

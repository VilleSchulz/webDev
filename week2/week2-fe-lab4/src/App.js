import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

function App() {
  return (
    <div>
      <Header/>
      <MainContent content ="React is a JavaScript library for building user interfaces."/>
      <MainContent content ="React makes it painless to create interactive UIs."/>
      <Footer content = {`&copy ${new Date().getFullYear()} React Lab`}/>
    </div>
   
  );
}

export default App;

// Import data
import {postings} from './postings'
// Import components
import './App.css';
import Gallery from './components/gallery';
import Searchbar from './components/searchbar';
import Sidebar from './components/sidebar';
import Directory from './components/directory';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar/>
        <Directory/>
        <Sidebar/>
        <Gallery postings={postings}/>
      </div>
    </div>
  );
}

export default App;

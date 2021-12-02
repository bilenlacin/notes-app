import './App.css';
import NoteArea from './components/NoteArea';
import NoteList from './components/NoteList';
import Search from './components/Search';

function App() {
  return (
    <div className='App'>
      <div>
        <header className='App-header'>Notes App</header>
        <Search />
        <NoteArea />
        <NoteList />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import UserData from './Forms/UserData';
import UserFile from './Forms/UserFile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>User Data Form</h2>
        <UserData />
        <h2>File Input Form</h2>
        <UserFile />
      </header>
    </div>
  );
}

export default App;

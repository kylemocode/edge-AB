import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo B
        </p>
        <button style={{ 
          backgroundColor: 'yellow',
          border: 'none', 
          padding: '10px', 
          color: 'gray', 
          fontSize: '20px', 
          marginTop: '15px',
          cursor: 'pointer',
        }}
        onClick={() => {
          document.cookie = "site=a";
          window.location.reload();
        }}>
          Change To Demo A
        </button>
      </header>
    </div>
  );
}

export default App;

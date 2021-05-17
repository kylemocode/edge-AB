import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo A
        </p>
        <button style={{ 
          backgroundColor: 'red',
          border: 'none', 
          padding: '10px', 
          color: 'white', 
          fontSize: '20px', 
          marginTop: '15px',
          cursor: 'pointer',
        }}
        onClick={() => {
          document.cookie = "site=b";
          window.location.reload();
        }}>
          Change To Demo B
        </button>
      </header>
    </div>
  );
}

export default App;

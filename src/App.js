import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import LaunchIcon from '@material-ui/icons/Launch';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MaterialTable from 'material-table';

function App() {
  return (
    <div className="App">
      <LaunchIcon />
      <TextField label="Note" />
      <Autocomplete
                multiple
                options={['a','b']}
                getOptionLabel={(o)=>o}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                    />
                    )}
            />
        <MaterialTable columns={[
            { title: 'Adı', field: 'name' },
            { title: 'Soyadı', field: 'surname' },
          ]}
          data={[{ name: 'Mehmet', surname: 'Baran' }]}
          title="Demo Title" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;

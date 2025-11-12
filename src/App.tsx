// import React from 'react';
import Button,{ButtonSize,ButtonType} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus>hello</Button>
        <Button disabled>hello</Button>
        <Button btnType={ButtonType.Danger}>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>hello</Button>
        <Button disabled>hello</Button>
        <Button onClick={(e)=>{e.preventDefault();alert(123)}}>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.large}>hello</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.large} href='http://www.baidu.com' >hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;

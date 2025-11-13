// import React from 'react';
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
  <MenuItem index={""}>cool link1</MenuItem>
  <MenuItem index={""}>cool link2</MenuItem>
  <MenuItem index={""}>cool link3</MenuItem>
  <MenuItem index={""}>cool link4</MenuItem>
</Menu>


        <Button autoFocus>hello</Button>
        <Button disabled>hello</Button>
        <Button btnType={ButtonType.Danger}>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
          hello
        </Button>
        <Button disabled>hello</Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            alert(123);
          }}
        >
          hello
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.large}>
          hello
        </Button>
        <Button
          btnType={ButtonType.Link}
          size={ButtonSize.large}
          href="http://www.baidu.com"
        >
          hello
        </Button>
      </header>
    </div>
  );
}

export default App;

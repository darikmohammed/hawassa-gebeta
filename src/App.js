import Body from './components/Body';
import Nav from './components/Nav';

function App() {
  return (
    <div className="font-poppin">
      <header className="sticky top-0 z-10 w-full">
        <Nav />
      </header>
      <main>{/* <Body /> */}</main>
    </div>
  );
}

export default App;

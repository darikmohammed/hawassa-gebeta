import Body from './components/Body';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="font-poppin">
      <header className="sticky top-0 z-10 w-full">
        <Nav />
      </header>
      <main className="">
        <Body />
      </main>
      <footer className=" bg-black_light py-10 px-8 md:px-40">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

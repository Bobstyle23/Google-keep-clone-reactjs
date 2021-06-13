import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      {notes.map((notes) => (
        <Note key={notes.key} title={notes.title} content={notes.content} />
      ))}
      ;
    </div>
  );
}

export default App;

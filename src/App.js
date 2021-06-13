import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function createNote(notes) {
  return <Note key={notes.key} title={notes.title} content={notes.content} />;
}
function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      {notes.map(createNote)}
    </div>
  );
}

export default App;

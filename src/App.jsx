import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold text-center mb-2"> Welcome to Cloud Notes </h1>

      <p className="text-slate-400 text-center mb-8"> AWS - powered note app </p>
      <NoteForm/>
      <NoteList/>
       </div>
    </div>
  );
}

export default App;
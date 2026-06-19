function NoteList() {
  return (
    <div className="grid gap-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex justify-between items-center">
        <p>Learn React</p>

        <button
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex justify-between items-center">
        <p>Learn AWS</p>

        <button
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteList;
function NoteForm() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Add New Note
      </h2>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter a note..."
          className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-medium"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default NoteForm;
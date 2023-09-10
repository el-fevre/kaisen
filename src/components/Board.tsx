export default function Board() {
  return (
    <div className="grid grid-cols-3 grid-rows-4 min-h-screen bg-slate-600">
      <div className="col-span-1 bg-slate-600">
        <header className="py-2">
          <h1 className="text-4xl font-semibold text-center border-slate-700 text-slate-100">
            Open
          </h1>
        </header>
      </div>
      <div className="col-span-1 bg-slate-600">
        <header className="py-2">
          <h1 className="text-4xl font-semibold text-center text-slate-100">
            In-Progress
          </h1>
        </header>
      </div>
      <div className="col-span-1 bg-slate-600">
        <header className="py-2">
          <h1 className="text-4xl font-semibold text-center text-slate-100">
            Done
          </h1>
        </header>
      </div>
    </div>
  );
}

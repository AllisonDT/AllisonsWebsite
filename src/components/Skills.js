export default function Skills() {
    return (
      <section className="p-8 bg-pink-300 rounded-lg shadow-md animate-zoomIn">
        <h2 className="text-3xl font-bold text-center mb-4">My Skills ✨</h2>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">React</div>
          <div className="bg-white p-4 rounded-lg shadow-sm">Tailwind CSS</div>
          <div className="bg-white p-4 rounded-lg shadow-sm">Swift</div>
          <div className="bg-white p-4 rounded-lg shadow-sm">C++</div>
        </div>
      </section>
    );
  }
  
export default function Projects() {
    return (
      <section className="p-8 bg-pink-200 rounded-lg shadow-md animate-slideIn">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects 🖥️</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Flavor Fusion</h3>
            <p>
              A spice blending app that connects wirelessly to a custom spice
              dispenser.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">MemoryMaker</h3>
            <p>
              An app for creating photobooks and AI-driven memories from your
              favorite photos.
            </p>
          </li>
        </ul>
      </section>
    );
  }
  
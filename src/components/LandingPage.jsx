import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen bg-blue-600 text-white p-8">
        <h1 className="text-5xl font-bold mb-6">Streamline Your Store Operations</h1>
        <p className="text-xl mb-6">Effortless billing and real-time inventory management for your business.</p>
        <Link to="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="p-12 bg-white grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Real-Time Inventory</h2>
          <p>Track stock levels across products effortlessly.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Automated Billing</h2>
          <p>Generate accurate bills with tax and discount support.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Role-Based Access</h2>
          <p>Control user access with admin, manager, and staff roles.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 Inventory & Billing Management System
      </footer>
    </div>
  );
}

export default LandingPage;

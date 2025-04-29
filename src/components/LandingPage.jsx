import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChartBarIcon, CubeIcon, ShieldCheckIcon, BanknotesIcon } from "@heroicons/react/24/outline";

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <CubeIcon className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">InventoryPro</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
              <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold mb-6">
              Transform Your Inventory Management
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Streamline operations, boost efficiency, and grow your business with our 
              comprehensive inventory and billing solution.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/signup" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 inline-block">
                Start Free Trial
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <ChartBarIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Real-Time Analytics</h2>
              <p className="text-gray-600">Get instant insights into your inventory levels, sales trends, and business performance.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <BanknotesIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Smart Billing</h2>
              <p className="text-gray-600">Generate professional invoices, manage taxes, and track payments effortlessly.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Secure Access</h2>
              <p className="text-gray-600">Role-based access control ensures data security and proper authorization.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-600 mt-2">Active Users</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">99.9%</h3>
              <p className="text-gray-600 mt-2">Uptime</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">50M+</h3>
              <p className="text-gray-600 mt-2">Transactions</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-600 mt-2">Support</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">InventoryPro</h4>
              <p className="text-gray-400">Transforming inventory management for modern businesses.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            &copy; 2024 InventoryPro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

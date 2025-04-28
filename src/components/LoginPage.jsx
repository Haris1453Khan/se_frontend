import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form action="/api/login" method="POST" className="space-y-4">
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" required />
          <input type="password" name="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded" required />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form action="/api/signup" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded" required />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" required />
          <input type="password" name="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded" required />
          <select name="role" className="w-full p-3 border border-gray-300 rounded" required>
            <option value="" disabled selected>Select Role</option>
            <option value="staff">Staff</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your account creation logic here
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md w-full max-w-xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Create Account</h1>
          <p className="text-center text-gray-600 text-sm md:text-base mb-6">
            Join Enfera and start your journey with us!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full text-sm"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full text-sm"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full text-sm"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full text-sm transition w-full"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
} 
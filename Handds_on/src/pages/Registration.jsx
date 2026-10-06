import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");

  const { registerUser } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      password: password,
      course: course.trim(),
    };

    const result = registerUser(newUser);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert("Registration successful! Please login.");

    navigate("/login");
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Student Placement Portal</h1>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            pattern="[A-Za-z ]+"
            title="Name should contain letters and spaces only"
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength="6"
            title="Password must contain at least 6 characters"
            required
          />

          <label>Course</label>

          <input
            type="text"
            placeholder="Example: B.Tech IT"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            required
          />

          <button type="submit">
            Register
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;
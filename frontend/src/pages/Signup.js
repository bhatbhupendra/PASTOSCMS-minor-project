import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(fullName, email, password, role);
    await signup(fullName, email, password, role);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Full Name:</label>
      <input
        type="text"
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <label>Role:</label>
      <input
        type="text"
        onChange={(e) => setRole(e.target.value)}
        value={role}
      />

      <button disabled={isLoading}>Signup</button>
      {error && <div>{error}</div>}
    </form>
  );
};
export default Signup;

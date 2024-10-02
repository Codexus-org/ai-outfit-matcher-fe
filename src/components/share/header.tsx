import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="font-medium tracking-tight">AI Outfit Matcher</div>
      <div className="flex items-center gap-6 font-medium">
        <div>Home</div>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../features/authentication/components/login";
import { Register } from "../features/authentication/components/register";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

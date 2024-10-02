import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../features/authentication/components/login";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

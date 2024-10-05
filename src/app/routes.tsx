import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../features/authentication/components/login";
import { Register } from "../features/authentication/components/register";
import PromptPage from "../features/promptpage/components";
import Collections from "../features/collections/components";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PromptPage />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
};

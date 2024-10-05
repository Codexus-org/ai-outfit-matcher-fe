import { BrowserRouter, Route, Routes } from "react-router-dom"
import PromptPage from "../features/promptpage/components"
import Collections from "../features/collections/components"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PromptPage />}/>
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  )
}
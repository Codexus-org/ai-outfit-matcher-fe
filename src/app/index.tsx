import { Mail } from "lucide-react";
import { Button } from "../components/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-violet-500">Hello form the App!</h1>
      <Button><Mail size={16} /></Button>
    </>
  );
}

export default App;
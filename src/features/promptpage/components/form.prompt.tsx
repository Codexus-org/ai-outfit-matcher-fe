import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";

export default function FormPrompt() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-3">
      <div className="space-y-2">
        <h3 className="text-xl">Input Prompt</h3>
        <Textarea placeholder="Prompt" rows={5} />
        <Button>Submit</Button>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">Example Prompt</h3>
        <p className="text-base font-normal text-slate-500">
          Generate an image of a men's outfit suitable for going to campus in
          rainy weather, featuring a long-sleeved, light blue denim button-up
          shirt, dark blue slim-fit jeans, and navy blue waterproof sneakers
        </p>
      </div>
    </div>
  );
}
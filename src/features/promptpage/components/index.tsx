import Header from "../../../components/share/header";
import Card from "./card";
import FormPrompt from "./form.prompt";

import example from "../../../assets/image/widget5.png"

export default function PromptPage(){
  return (
    <>
      <Header/>
      <section className='container mx-auto grid grid-cols-3 py-5 gap-4'>
        <FormPrompt />
        <div className='col-span-2 columns-2 gap-2'>
          <Card img={example} />
          <Card img={example} />
          <Card img={example} />
          <Card img={example} />
        </div>
      </section>
    </>
  )
}
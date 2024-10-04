import Header from "../../../components/share/header";
import CardCollection from "./card.collection";

import example from "../../../assets/image/widget5.png"

export default function Collections() {
  return (
    <>
      <Header />
      <section className="container mx-auto grid grid-cols-3 py-5 gap-4">
        <CardCollection img={example} />
        <CardCollection img={example} />
        <CardCollection img={example} />
      </section>
    </>
  )
}
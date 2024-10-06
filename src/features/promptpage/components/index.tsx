import output from "../../../assets/image/output.png"
import Header from "../../../components/share/header"
import Card from "./card"
import FormPrompt from "./form.prompt"
import TableDescription from "./table.description"

export default function PromptPage() {
  const description = {
    weather: 'rain',
    occasion: 'formal',
    clothes: 't-shirt',
    pants: 'jeans',
    shoes: 'sneakers',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe nam vel quod doloremque reprehenderit officia placeat, eos at omnis rerum voluptas mollitia a amet quos aspernatur quo veritatis atque?"
  }

  const defaultDescription = {
    weather: '',
    occasion: '',
    clothes: '',
    pants: '',
    shoes: '',
    description: ''
  }

  const image = output
  // const image = null
  const dataDescription = description
  // const dataDescription = null

  return (
    <>
      <Header/>
      <section className="container mx-auto p-5">
        <h1 className="text-3xl font-semibold">Hallo Username 👋</h1>
        <FormPrompt />
        <div className="grid grid-cols-2 gap-4 mt-5">
          {image !== null ? <Card img={image} /> : <Card img="" />}
          {dataDescription !== null ? <TableDescription description={dataDescription} /> : <TableDescription description={defaultDescription} />}
        </div>
      </section>
    </>
  )
}
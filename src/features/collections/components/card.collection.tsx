import React from "react";
import { Button } from "../../../components/ui/button";
import { Share2, TrashIcon } from "lucide-react";

interface CardProps {
  img: string
}

export default function CardCollection(props: React.PropsWithChildren<CardProps>) {
  const {img} = props

  return (
    <section className=''>
      <div className='max-w-md overflow-hidden rounded-xl border-4 border-blue-500 mb-2'>
        <div>
          <img src={img} alt="" />
        </div>
        <div className='flex gap-3 py-2 px-3'>
          <Button iconOnly><Share2 /></Button>
          <Button iconOnly variant="outline" className="text-white bg-red-500 hover:bg-red-400"><TrashIcon /></Button>
        </div>
      </div>
    </section>
  )
}

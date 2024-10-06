import React from "react";
import { Button } from "../../../components/ui/button";
import { BookmarkPlus } from "lucide-react";

interface CardProps {
  img: string
}

export default function Card(props: React.PropsWithChildren<CardProps>) {
  const {img} = props

  return (
    <section className=''>
      <div className='h-full overflow-hidden rounded-xl border-2 border-slate-400 bg-gray-200'>
        {img ? (
          <>
          <div>
            <img src={img} alt="" className="h-full w-full object-cover bg-red-300" />
          </div>
          <div className='flex gap-3 py-2 px-3 border-t border-slate-200 bg-white'>
            <Button startContent={<BookmarkPlus />} > Add to Collection </Button>
          </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-4xl font-semibold absolute text-slate-400">Image</p>
          </div>
        )}
      </div>
    </section>
  )
}

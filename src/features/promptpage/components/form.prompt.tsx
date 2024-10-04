import { Button } from '../../../components/ui/button'
import { Textarea } from '../../../components/ui/textarea'
import { Input } from '../../../components/ui/input'
import { Select } from '../../../components/ui/select'
import weathers from '../constant/weathers'
import eventOptions from '../constant/event'

export default function FormPrompt() {
  return (
      <form action="" className='space-y-3'>
        <div>
          <label className='font-medium text-base text-slate-500' htmlFor="">Name</label>
          <Input placeholder='name' />
        </div>
        <div>
          <label className='font-medium text-base text-slate-500' htmlFor="">Weather</label>
          <Select caption='Weather' options={weathers} />
        </div>
        <div>
          <label className='font-medium text-base text-slate-500' htmlFor="">Occasion</label>
          <Select caption='Occasion' options={eventOptions} />
        </div>
        <div>
          <label className='font-medium text-base text-slate-500' htmlFor="">clothes</label>
          <Input placeholder='clothes' />
        </div>
        <div>
          <label className='font-medium text-base text-slate-500' htmlFor="">pants</label>
          <Input placeholder='pants' />
        </div>
        <div>
          <label className='font-medium text-base text-slate-500' htmlFor="">shoes</label>
          <Input placeholder='shoes' />
        </div>
        <div>
          <label className='font-medium text-base text-slate-500' htmlFor="">description</label>
          <Textarea placeholder='description' rows={5} />
        </div>
        <Button>Generate</Button>
      </form>
  )
}

import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <section className='w-full flex justify-between items-center px-5 py-2 border-b-2 border-violet-600'>
      <div className='text-2xl font-medium'>
        <p>AI-Outfit Matcher</p>
      </div>
      <div>
        <Link to="/" className='mr-5 text-base font-semibold hover:text-violet-600'>Home</Link>
        <Link to="/collections" className='mr-5 text-base font-semibold hover:text-violet-600'>Collections</Link>
      </div>
      <div>
        <form action="">
          <Button> Logout</Button>
        </form>
      </div>
    </section>
  )
}

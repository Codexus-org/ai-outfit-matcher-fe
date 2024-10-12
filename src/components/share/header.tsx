import { useMutation } from '@tanstack/react-query';
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  const host = process.env.NODE_ENV === 'production' ? process.env.HOST_PROD : process.env.HOST_DEV; 

  const {
    mutate: handleSubmitLogout
  } = useMutation({
      mutationKey: ['logout'],
      mutationFn: async () => {
        try {
          const res = await fetch(`http://${host}:8000/outfitmatcher/api/v1/logout`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          })
          
          const data = await res.json()
          return data
        } catch (error) {
          console.log(error)
          throw new Error("Internal server error");          
        }
      },
      onSuccess: () => navigate('/login'),
  });

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
        <Button onClick={() => handleSubmitLogout()}> Logout</Button>
      </div>
    </section>
  )
}

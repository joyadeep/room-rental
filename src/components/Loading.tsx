import {Loader2} from 'lucide-react'
const Loading = () => {
  return (
    <div className='w-full'>
        <Loader2 className='animate-spin text-purple-600 mx-auto' strokeWidth={2.5} size={48}/>
    </div>
  )
}

export default Loading
import { Leaf } from 'lucide-react'

function Logo() {
  return (
    <>
      <Leaf
        className="h-24 w-24 transition-all group-hover:scale-110"
        aria-hidden
      />
      <h1 className="ml-4 text-2xl font-bold text-neutral-500">
        <span className="-mr-6 font-extrabold text-primary-500">Agro</span>{' '}
        Chain
      </h1>
    </>
  )
}

export default Logo

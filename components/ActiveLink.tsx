import Link from 'next/link'
import { useRouter } from 'next/router'
import { pagesPath } from '../lib/$path'

function ActiveLink() {
  const router = useRouter()

  const handleClick = () => {
    router.push(pagesPath.users._userInfo(['mario', 'hello', 'world!']).$url())
  }

  return <>
    <div onClick={handleClick}>Hello</div>
    <Link href={pagesPath.articles._id(1).$url()}>
      World!
    </Link>
  </>
}

export default ActiveLink
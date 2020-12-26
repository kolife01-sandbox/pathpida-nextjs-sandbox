import router from 'next/dist/next-server/lib/router/router'
import Link from 'next/link'
import { useCallback } from 'react'
import { pagesPath } from '../lib/$path'

console.log(pagesPath.post.create.$url({ query: { userId: 1 }})) // { pathname: '/post/create', query: { userId: 1 }}
console.log(pagesPath.post.create.$url()) // type error
console.log(pagesPath.post._pid(1).$url()) // { pathname: '/post/[pid]', query: { pid: 1 }}
console.log(pagesPath.post._pid(1).$url({ query: { limit: 10 }, hash: 'sample' })) // { pathname: '/post/[pid]', query: { pid: 1, limit: 10 }, hash: 'sample' }

export default () => {
  const onclick = useCallback(() => {
    router.push(pagesPath.post._pid(1).$url())
  }, [])

  return <>
    <Link href={pagesPath.post._slug(['a', 'b', 'c']).$url()} />
    <div onClick={onclick} />
  </>
}
/* eslint-disable */
import { OptionalQuery as OptionalQuery0 } from '../pages/post/[pid]'
import { Query as Query1 } from '../pages/post/create'

export const pagesPath = {
  post: {
    _pid: (pid: string | number) => ({
      $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ pathname: '/post/[pid]' as const, query: { pid, ...url?.query }, hash: url?.hash })
    }),
    create: {
      $url: (url: { query: Query1, hash?: string }) => ({ pathname: '/post/create' as const, query: url.query, hash: url.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

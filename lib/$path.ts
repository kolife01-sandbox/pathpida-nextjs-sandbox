/* eslint-disable */
import { OptionalQuery as OptionalQuery0 } from '../pages/articles/[id]'
import { Query as Query1 } from '../pages/user'

export const pagesPath = {
  articles: {
    _id: (id: string | number) => ({
      $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({ pathname: '/articles/[id]' as const, query: { id, ...url?.query }, hash: url?.hash })
    })
  },
  user: {
    $url: (url: { query: Query1, hash?: string }) => ({ pathname: '/user' as const, query: url.query, hash: url.hash })
  },
  users: {
    _userInfo: (userInfo: string[]) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/users/[...userInfo]' as const, query: { userInfo }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

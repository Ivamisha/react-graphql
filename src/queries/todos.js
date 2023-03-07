import { gql } from '@apollo/client'

export const GET_TODOS = gql`
  query ($page: Int, $limit: Int) {
    todos(options: { paginate: { page: $page, limit: $limit } }) {
      data {
        id
        title
      }
    }
  }
`

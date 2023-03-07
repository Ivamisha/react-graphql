import { gql } from '@apollo/client'

export const CREATE_TODO = gql`
  mutation ($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
    }
  }
`
export const UPDATE_TODO = gql`
  mutation ($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      title
    }
  }
`

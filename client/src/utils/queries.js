import gql from 'graphql-tag';

export const GET_ME = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      username
      email
      savedBooks {
        bookId
      }
    }
  }
}
`;
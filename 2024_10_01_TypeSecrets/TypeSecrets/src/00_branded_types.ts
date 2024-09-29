type User = {
  id: number;
  name: string;
}

type Post = {
  id: number;
  name: string
}


async function fetchComments(post: Post, user: User) {
  // fetching comments
}


const user: User = {
  id: 2,
  name: 'John Snow'
}

const post: Post = {
  id: 50,
  name: 'TypeSecret'
}

const commentsBad = fetchComments(user, post)
const commentsGood = fetchComments(post, user)
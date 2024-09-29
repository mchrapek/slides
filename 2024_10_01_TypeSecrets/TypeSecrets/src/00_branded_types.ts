type User = {
  id: number;
  name: string;
}

type Post = {
  id: number;
  ownerId: number;
  title: string
}


async function fetchComments(postId: number, userId: number) {
  // fetching comments
}


const user: User = {
  id: 2,
  name: 'John Snow'
}

const post: Post = {
  id: 50,
  ownerId: 2,
  title: 'TypeSecret'
}

const commentsBad = fetchComments(user.id, post.id)
const commentsGood = fetchComments(post.id, user.id)
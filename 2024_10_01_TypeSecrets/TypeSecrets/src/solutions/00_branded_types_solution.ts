type Brand<K, T> = K & { __brand: T }
type UserId = Brand<number, 'UserId'>
type PostId = Brand<number, 'PostId'>

type User = {
  id: UserId;
  name: string;
}

type Post = {
  id: PostId;
  ownerId: number;
  title: string
}


async function fetchComments(postId: PostId, userId: UserId) {
  // fetching comments
}


const user: User = {
  id: 2 as UserId,
  name: 'John Snow'
}

const post: Post = {
  id: 50 as PostId,
  ownerId: 2,
  title: 'TypeSecret'
}

// const commentsWrongParams = fetchComments(user.id, post.id)
// const commentsGoodParams = fetchComments(post.id, user.id)
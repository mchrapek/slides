interface PostForm {
  id: number;
  title: string;
  metadata: {
    created: Date,
    publisherId: number;
  },
  author: {
    id: number;
    username: {
      firstName: string;
      secondName: string;
    }
  }
}

const path: any = ['metadata', 'created'];

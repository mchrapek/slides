interface PostForm {
  id: number;
  title: string;
  metadata: {
    created: Date,
    publisherId: number;
  }
}

const path: any = ['metadata', 'created'];

interface PostForm {
  id: number;
  title: string;
  metadata: {
    created: Date,
    publisherId: number;
  }
}

type Path<T> = T extends Object
  ? { [Key in keyof T]: [Key] | [Key, ...Path<T[Key]>] }[keyof T]
  : never;

type PathForm = Path<PostForm>

const description: PathForm = ['metadata', 'publisherId'];

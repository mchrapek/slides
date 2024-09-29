type UserConfig = {
  username: string;
  layout: string;
}

type UserPermission = {
  [Key in keyof UserConfig as `change${Capitalize<Key>}`]: boolean
}

let permissions: UserPermission = {
  changeUsername: true,
  changeLayout: true
}
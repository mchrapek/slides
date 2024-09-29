type Role = 'user' | 'admin'

function login(role: Role) {
    switch(role) {
      case 'user':
        return true;
      case "admin":
        return true;
      default:
        const _unreachable: never = role;
        throw 'wrong role';
    }
}
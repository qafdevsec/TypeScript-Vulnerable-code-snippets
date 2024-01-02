class User {
  constructor(public username: string, public password: string) {}

  checkPassword(inputPassword: string): boolean {
    return this.password === inputPassword;
  }
}

const password: string = 'mysecretpass';

const fooPassword: string = 'mysecretpass';

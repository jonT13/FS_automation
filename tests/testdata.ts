export class User{
    private name: string;
    private email: string;
    private password: string;
  
    public constructor(name: string, email: string, password: string){
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    public getName(): string{
      return this.name
    }
    public getEmail(): string{
      return this.email
    }
    public getPassword(): string{
      return this.password
    }
  }

export const basicUser = new User("Gian Lim", "gian.l+basic@freshclinics.com", "P@ssw0rd123")
export const superAdmin = new User("Bryan R", "bryan.r@freshclinics.com.au", "xkE5jSk@8hKp1V6j")
export const doctor = new User("Gian Lim", "gian.l+doctor@freshclinics.com", "P@ssw0rd123")
export const nurse = new User("Gian Lim", "gian.l+nurse@freshclinics.com", "P@ssw0rd123")

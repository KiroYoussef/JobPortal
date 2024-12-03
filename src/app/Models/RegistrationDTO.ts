export class RegistrationDTO {
    firstName: string;
    lastName: string;
    birthday: string;
    gender: string;
    email: string;
    phoneNumber: string;
    password: string;
    role: string;
    confirmPassword: string;
  
    constructor(formData: any) {
      this.firstName = formData.firstName;
      this.lastName = formData.lastName;
      this.birthday = formData.birthday;
      this.gender = formData.gender;
      this.email = formData.email;
      this.phoneNumber = formData.phoneNumber;
      this.password = formData.password;
      this.role = formData.role;
      this.confirmPassword = formData.confirmPassword;
    }
  }
  
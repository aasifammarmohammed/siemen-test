import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersKey = 'users';

  storeUserData(user: any) {
    const users = this.getStoredUserData();
    user.id = Date.now();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

  getStoredUserData() {
    const userData = localStorage.getItem("users");
    return userData ? JSON.parse(userData) : [];
  }

  deleteUserById(id: number): void {
    const users = this.getStoredUserData();
    const indexToDelete = users.findIndex((user: any) => user.id === id);

    if (indexToDelete !== -1) { 
      users.splice(indexToDelete, 1);
      localStorage.setItem(this.usersKey, JSON.stringify(users));
    }
  }
 
}

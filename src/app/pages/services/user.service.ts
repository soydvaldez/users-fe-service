import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { users } from '../../shared/data';
import { HttpClient } from '@angular/common/http';

export interface UserResponse {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  roleId: number;
  departmentId: number;
}

export interface UserResponseDTO {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  roleId: number;
  departmentId: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  getUsers(): Observable<UserResponseDTO[]> {
    return of<UserResponse[]>(users).pipe(
      map((u) => {
        return u.map((user) => ({
          ...user,
          createdAt: new Date(user.createdAt),
          updatedAt: new Date(user.updatedAt),
        }));
      })
    );
  }
}

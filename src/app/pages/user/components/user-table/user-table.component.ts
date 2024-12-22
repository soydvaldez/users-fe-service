import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserResponseDTO, UserService } from '../../../services/user.service';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cleanString } from '../../../../core/utils/StringUtils';

interface SelectableUserResponse extends UserResponseDTO {
  isSelected: boolean;
}

@Component({
  standalone: true,
  selector: 'app-user-table',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent implements OnInit, OnDestroy {
  criteriaSearch = ['name', 'position', 'status'];
  isCollapsed: boolean = false;
  searchInput = new FormControl<string>('');

  users$!: Observable<UserResponseDTO[]>;
  usersSelect$!: Observable<UserResponseDTO[]>;

  userSubscription!: Subscription;
  users: SelectableUserResponse[] = [];

  usersSubject!: BehaviorSubject<SelectableUserResponse[]>;
  usersObservable$!: Observable<SelectableUserResponse[]>;

  expandedRows: Set<number> = new Set();

  isSelectedAllUsers: boolean = false;

  constructor(private readonly userService: UserService) {}

  toggleRow(rowId: number): void {
    if (this.expandedRows.has(rowId)) {
      this.expandedRows.delete(rowId); // Cierra la fila si está abierta
    } else {
      this.expandedRows.add(rowId); // Abre la fila si está cerrada
    }
  }

  isRowExpanded(rowId: number): boolean {
    return this.expandedRows.has(rowId); // Verifica si una fila está abierta
  }

  notifyChanges(users: SelectableUserResponse[]) {
    this.usersSubject.next(users);
  }

  ngOnInit(): void {
    function notify() {}

    this.userSubscription = this.userService
      .getUsers()
      .pipe(
        map((users) => {
          return users.map((user) => ({ ...user, isSelected: false }));
        })
      )
      .subscribe((users) => {
        this.users = users;
        this.usersSubject = new BehaviorSubject<SelectableUserResponse[]>(
          this.users
        );
        this.usersObservable$ = this.usersSubject.asObservable();
      });

    this.searchInput.valueChanges.subscribe((searchTerm) => {
      if (!searchTerm) searchTerm = '';
      const searchTermCleaned = cleanString(searchTerm);

      // Todos los filtros:

      const filteredUsers =
        this.filterByName(searchTermCleaned) ||
        this.filterByEmail(searchTermCleaned) ||
        this.filterByPosition(searchTermCleaned);

      this.notifyChanges(filteredUsers);
      // cleanString(user.email).includes(searchTermCleaned)
    });
  }

  filterByName(searchTerm: string) {
    function getfullname(user: SelectableUserResponse) {
      return cleanString(user.firstname) + ' ' + cleanString(user.lastname);
    }

    return this.users.filter((user) => {
      return getfullname(user).includes(searchTerm);
    });
  }

  filterByEmail(searchTerm: string) {
    return this.users.filter((user) => user.email.includes(searchTerm));
  }

  filterByPosition(searchTerm: string) {
    return this.users.filter((user) => user.email.includes(searchTerm));
  }

  getfullname(user: SelectableUserResponse) {
    return user.firstname + ' ' + user.lastname;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  toggleSelectAll(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.users.forEach((user) => (user.isSelected = isChecked));
    if (isChecked) {
      this.isSelectedAllUsers = true;
    } else {
      this.isSelectedAllUsers = false;
    }
  }

  isAllSelected(): boolean {
    return this.users.every((user) => user.isSelected);
  }

  isIndeterminate(): boolean {
    const someSelected = this.isOneUserSelected();
    return !this.isAllSelected() && someSelected;
  }

  isOneUserSelected(): boolean {
    return this.users.some((user) => user.isSelected);
  }

  getDatetime(date: Date) {
    return formatDate(date);
  }

  toggleSelectAllUsers() {
    if (this.isSelectedAllUsers) {
      this.users.forEach((user) => {
        user.isSelected = false;
      });
      this.isSelectedAllUsers = false;
    } else {
      this.users.forEach((user) => {
        user.isSelected = true;
      });
      this.isSelectedAllUsers = true;
    }
  }

  toggleSelect(event: Event) {
    const isChecked: boolean = (event.target as HTMLInputElement).checked;
    if (!isChecked) {
      this.isSelectedAllUsers = false;
    }
    if (this.isAllSelected()) this.isSelectedAllUsers = true;
  }
}

function formatDate(date: Date): string {
  const yy = date.getFullYear().toString().slice(-2);
  const mm = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd = date.getDate().toString().padStart(2, '0');
  const hh = date.getHours().toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');
  const ss = date.getSeconds().toString().padStart(2, '0');

  return `${yy}/${mm}/${dd} ${hh}:${min}:${ss}`;
}

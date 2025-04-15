import { Component, OnInit, Signal, WritableSignal, signal, computed } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: WritableSignal<Employee[]> = signal<Employee[]>([]);
  searchControl = new FormControl('');
  employeeForm: FormGroup;
  isEditing = signal(false);
  currentEmployeeId = signal<number | null>(null);

  // Pagination variables
  currentPage = 1;
  pageSize = 5; // Number of employees per page
  totalPages = 1;

  // Search results
  filteredEmployees: Employee[] = [];
  paginatedEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
    this.employeeForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Position: new FormControl('', [Validators.required]),
      Salary: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees.set(data);
      this.filteredEmployees = data;
      this.updatePagination();
    });
  }

  // Optimized Search Function - Searches across Name, Position, and Salary
  onSearch() {
    const searchText = this.searchControl.value?.toLowerCase().trim() || '';

    this.filteredEmployees = this.employees().filter((e) =>
      e.name.toLowerCase().includes(searchText) ||
      e.position.toLowerCase().includes(searchText) ||
      e.salary.toString().includes(searchText) // Convert salary to string for searching
    );

    this.currentPage = 1; // Reset to first page when searching
    this.updatePagination();
  }
  clearSearch() {
    this.searchControl.setValue('');
    this.onSearch();
  }
  

  // Pagination Logic
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredEmployees.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedEmployees = this.filteredEmployees.slice(start, start + this.pageSize);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

sortColumn: string = '';
sortDirection: 'asc' | 'desc' = 'asc';

sortTable(column: keyof Employee) {
  if (this.sortColumn === column) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortColumn = column;
    this.sortDirection = 'asc';
  }

  this.filteredEmployees.sort((a, b) => {
    let valueA = a[column];
    let valueB = b[column];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
    if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  this.updatePagination();
}



  addOrUpdateEmployee() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const employeeData: Employee = this.employeeForm.value;

    if (this.isEditing() && this.currentEmployeeId() !== null) {
      this.employeeService.updateEmployee(this.currentEmployeeId()!, employeeData).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    } else {
      this.employeeService.addEmployee(employeeData).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    }
  }

  editEmployee(employee: Employee) {
    this.employeeForm.setValue({
      Name: employee.name,
      Position: employee.position,
      Salary: employee.salary
    });

    this.isEditing.set(true);
    this.currentEmployeeId.set(employee.id);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }

  resetForm() {
    this.employeeForm.reset();
    this.isEditing.set(false);
    this.currentEmployeeId.set(null);
  }

  get name() {
    return this.employeeForm.get('Name');
  }
  get position() {
    return this.employeeForm.get('Position');
  }
  get salary() {
    return this.employeeForm.get('Salary');
  }
}

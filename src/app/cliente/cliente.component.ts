import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Producto } from '../models/producto';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [SidebarComponent, CardModule, TableModule, CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clients!: Cliente[];

    constructor(private clienteService: ClienteService) {}

    ngOnInit() {
    }
}

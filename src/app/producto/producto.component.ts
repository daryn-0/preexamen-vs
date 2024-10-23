import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [SidebarComponent, CardModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

}

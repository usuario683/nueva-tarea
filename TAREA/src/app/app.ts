import { Component } from '@angular/core';
import { ProductoComponent } from './components/producto/producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './app.component.html',
})
export class App {}
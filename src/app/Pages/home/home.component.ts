import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/Personajes';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre:string='Rick and Morty'
  productos:Personaje[]=[]
  isLoading:boolean=true

  constructor(
    private productosService:ProductosService

  ) {
    this.productosService.getAll()
    .subscribe({
      next:(data:Personaje[])=>{
        console.log("productos",data)
        this.productos = data
        this.isLoading=false
      },
      error:error=>{
        console.log("Error Producto", error)
      }
    })
   }

  ngOnInit(): void {
  }

}

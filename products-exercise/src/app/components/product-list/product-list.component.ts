import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
  selector: 'app-product-list',
  imports: [NgFor,NgIf,NgClass, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false,image:'https://st2.depositphotos.com/1000128/9585/i/950/depositphotos_95853428-stock-photo-modern-laptop-or-notebook.jpg' },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true,image:'https://www.samsungmobilepress.com/file/B1451680D49421D2EF196E8744B721CB102084AE494FEF3EA0040E0EA67ED31E895F515F2E6B5A8920B2251EF086C1662A573753A31D59F35A05E4724CEA7A052F35353ECFFE1C40AC11DF482128D81EA3D05347CFFF7AD38B703E0F7BB4F7847C1395FF032CCD0E85C72D1D97B6B2DFDBC24B570CAFE3316C10B5EFEE876114' },
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false,image:'https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg?auto=webp&quality=75&width=1024' },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true,image:'https://img.lovepik.com/free-png/20220126/lovepik-rhino-modeling-computer-monitor-png-image_401775034_wh1200.png'},
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false,image:'https://resources.claroshop.com/medios-plazavip/publicidad/62aa4d4431b9a_tc17-1-1-jpg.jpg' },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false,image:'https://selectsound.com.mx/cdn/shop/products/mouse-inalambrico-24-ghz-715599_1080x1080.jpg?v=1698856176' },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true,image:'https://www.a4toner.com/blog/wp-content/uploads/2020/11/HP-Color-Laser-150A-1024x752.jpg.webp' },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false,image:'https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg' },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true,image:'https://www.ergostyle.mx/9754-large_default/silla-ergonomica-malla-julia.jpg' },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false,image:'https://m.media-amazon.com/images/I/71mSz6DqYGL._AC_UF1000,1000_QL80_.jpg' },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true,image:'https://m.media-amazon.com/images/I/61LDorJi+xL.jpg' },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false,image:'https://ddtech.mx/assets/uploads/907621a94b4e4c10391d1e5ccc937677.jpg' },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true,image:'https://m.media-amazon.com/images/I/619znf6BzfL.jpg' },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false,image:'https://www.supermexdigital.mx/web/image/product.image/23156/image_1024/824142332238-8.jpg?unique=fcbf294' },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true,image:'https://bionet.mx/wp-content/uploads/2024/01/01_9_82463e9f-2971-4500-84cb-19e34140ba24.jpg' },
  ];

  selectedProduct: Product | null = null;

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
}

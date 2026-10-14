const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=88`

// Fotografías editoriales de producto, sin personas ni rostros: prendas, accesorios y bodegones.
const images = {
  satin: photo('photo-1558769132-cb1aea458c5e'), blazer: photo('photo-1445205170230-053b83016050'), coat: photo('photo-1551488831-00ddcb6c6bd3'), denim: photo('photo-1525507119028-ed4c629a60a3'), leopard: photo('photo-1558618666-fcd25c85cd64'), bag: photo('photo-1590874103328-eac38a683ce7'), shoe: photo('photo-1600185365483-26d7a4cc7519'), jewelry: photo('photo-1617038220319-276d3cfab638'),
}

export const products = [
  { id: 'vestido-siena', name: 'Vestido Siena', category: 'Nueva Colección', price: 89, badge: 'Nuevo', description: 'Satén color cacao con caída fluida y escote suave para noches que se quedan en la memoria.', sizes: ['S', 'M', 'L'], stock: { S: 3, M: 4, L: 2 }, image: images.satin, images: [images.satin, images.bag] },
  { id: 'blazer-mila', name: 'Blazer Mila', category: 'Otoño / Invierno', price: 118, badge: 'Atemporal', description: 'Sastrería suave en tono camel, hombro definido y un fit que transforma cualquier conjunto.', sizes: ['S', 'M', 'L'], stock: { S: 2, M: 5, L: 1 }, image: images.blazer, images: [images.blazer, images.coat] },
  { id: 'abrigo-napoli', name: 'Abrigo Napoli', category: 'Otoño / Invierno', price: 149, badge: 'Edición limitada', description: 'Abrigo largo de líneas puras y textura cálida: la capa esencial para los días de Quito.', sizes: ['S', 'M', 'L'], stock: { S: 1, M: 2, L: 2 }, image: images.coat, images: [images.coat, images.blazer] },
  { id: 'jean-lumiere', name: 'Jean Lumière', category: 'Nueva Colección', price: 78, badge: 'Pinterest made real', description: 'Denim de tiro alto y destellos sutiles: estructura que acompaña y detalles que hablan.', sizes: ['S', 'M', 'L'], stock: { S: 4, M: 3, L: 3 }, image: images.denim, images: [images.denim, images.jewelry] },
  { id: 'set-savannah', name: 'Set Savannah', category: 'Animal Print', price: 105, badge: 'Animal print', description: 'Dos piezas de estampado protagonista con tonos tierra para combinar fuerza y sofisticación.', sizes: ['S', 'M', 'L'], stock: { S: 2, M: 3, L: 1 }, image: images.leopard, images: [images.leopard, images.satin] },
  { id: 'bolso-aria', name: 'Bolso Aria', category: 'Nueva Colección', price: 92, badge: 'Favorito', description: 'Bolso de silueta escultural con acabado liso y espacio justo para tus esenciales.', sizes: ['Única'], stock: { 'Única': 5 }, image: images.bag, images: [images.bag, images.shoe] },
  { id: 'tacon-roma', name: 'Tacón Roma', category: 'Otoño / Invierno', price: 84, badge: 'Últimas tallas', description: 'Tacón de diseño limpio pensado para estilizar sin renunciar a la comodidad.', sizes: ['36', '37', '38', '39'], stock: { 36: 2, 37: 3, 38: 2, 39: 1 }, image: images.shoe, images: [images.shoe, images.bag] },
  { id: 'aretes-solenne', name: 'Aretes Solenne', category: 'Nueva Colección', price: 39, badge: 'Statement', description: 'Aretes dorados de presencia delicada: el gesto final que transforma un conjunto.', sizes: ['Única'], stock: { 'Única': 6 }, image: images.jewelry, images: [images.jewelry, images.bag] },
]

export const categories = ['Todo', 'Animal Print', 'Otoño / Invierno', 'Nueva Colección']

export const sets = [
  { id: 'set-duna', name: 'Set Duna', price: 142, regularPrice: 167, image: images.blazer, description: 'Blazer camel y pantalón de caída fluida: dos piezas que resuelven un look entero con elegancia.', pieces: [{ name: 'Blazer Mila', label: 'Blazer', sizes: ['S', 'M', 'L'] }, { name: 'Pantalón Duna', label: 'Pantalón', sizes: ['S', 'M', 'L'] }] },
  { id: 'set-safari', name: 'Set Safari', price: 128, regularPrice: 151, image: images.leopard, description: 'Top y falda en animal print, equilibrados con una paleta cálida y accesorios dorados.', pieces: [{ name: 'Top Safari', label: 'Top', sizes: ['S', 'M', 'L'] }, { name: 'Falda Savannah', label: 'Falda', sizes: ['S', 'M', 'L'] }] },
  { id: 'set-cacao', name: 'Set Cacao', price: 119, regularPrice: 138, image: images.satin, description: 'Camisa satinada y falda midi color chocolate: un conjunto atemporal para usar una y otra vez.', pieces: [{ name: 'Camisa Cacao', label: 'Camisa', sizes: ['S', 'M', 'L'] }, { name: 'Falda Siena', label: 'Falda', sizes: ['S', 'M', 'L'] }] },
]

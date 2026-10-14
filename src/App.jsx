import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import ProductModal from './components/ProductModal'
import CartDrawer from './components/CartDrawer'
import Lookbook from './components/Lookbook'
import SetsSection from './components/SetsSection'
import RoseLineArt from './components/RoseLineArt'
import { products } from './data/products'
import { storeConfig } from './data/storeConfig'

const savedCart = () => { try { return JSON.parse(localStorage.getItem('stefany-cart')) || [] } catch { return [] } }
export default function App() {
  const [selected, setSelected] = useState(null); const [cart, setCart] = useState(savedCart); const [open, setOpen] = useState(false)
  useEffect(() => { localStorage.setItem('stefany-cart', JSON.stringify(cart)) }, [cart])
  const remaining = useMemo(() => products.reduce((all, product) => { all[product.id] = Object.fromEntries(product.sizes.map(size => [size, Math.max(0, product.stock[size] - cart.filter(item => item.id === product.id && item.size === size).reduce((sum, item) => sum + item.quantity, 0))])); return all }, {}), [cart])
  const add = (product, size) => { if (!remaining[product.id]?.[size]) return; const cartId = `${product.id}-${size}`; setCart(current => { const found = current.find(item => item.cartId === cartId); return found ? current.map(item => item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, size, cartId, quantity: 1 }] }); setSelected(null); setOpen(true) }
  const update = (cartId, quantity) => setCart(current => { const item = current.find(entry => entry.cartId === cartId); if (!item || quantity < 1) return current.filter(entry => entry.cartId !== cartId); const maximum = item.stock[item.size]; return current.map(entry => entry.cartId === cartId ? { ...entry, quantity: Math.min(quantity, maximum) } : entry) })
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  return <div className="relative min-h-screen overflow-hidden"><div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden"><RoseLineArt className="left-[-42px] top-20 h-72 w-56 -rotate-[20deg] opacity-[.11]" /><RoseLineArt className="right-[7%] top-44 h-40 w-32 rotate-[25deg] opacity-[.07]" /><RoseLineArt className="right-[-45px] top-[560px] h-72 w-56 rotate-[18deg] opacity-[.1]" /><RoseLineArt className="left-[12%] top-[900px] h-36 w-28 -rotate-[28deg] opacity-[.06]" /><RoseLineArt className="left-[-48px] top-[1180px] h-64 w-52 -rotate-[14deg] opacity-[.09]" /><RoseLineArt className="right-[14%] top-[1500px] h-44 w-36 rotate-[32deg] opacity-[.06]" /><RoseLineArt className="right-[-45px] top-[1830px] h-72 w-56 rotate-[20deg] opacity-[.1]" /><RoseLineArt className="left-[20%] top-[2360px] h-40 w-32 -rotate-[15deg] opacity-[.06]" /></div><div className="relative z-10"><Navbar count={count} onCart={() => setOpen(true)} /><main><Hero /><ProductGrid onSelect={setSelected} onAdd={add} remaining={remaining} /><SetsSection /><Lookbook /></main><footer id="ubicacion" className="border-t border-[#e8ddd0] bg-[#fbf8f3] px-5 py-14 sm:px-8"><div className="mx-auto grid max-w-7xl gap-8 text-sm text-[#705b4d] sm:grid-cols-3"><div><p className="font-serif text-3xl text-[#382218]">Stefany <i className="font-normal">Boutique</i></p><p className="mt-3">Piezas que cuentan tu historia.</p></div><div><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#a46f3e]">Visítanos</p><p className="mt-3 leading-6">{storeConfig.location}<br />{storeConfig.address}<br />{storeConfig.hours}</p></div><div><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#a46f3e]">Conversemos</p><a href="https://instagram.com/stefanyboutique" target="_blank" rel="noreferrer" className="mt-3 block hover:text-[#a46f3e]">Instagram {storeConfig.instagram} ↗</a></div></div></footer><ProductModal product={selected} remaining={selected ? remaining[selected.id] : {}} onClose={() => setSelected(null)} onAdd={add} /><CartDrawer open={open} items={cart} onClose={() => setOpen(false)} onUpdate={update} /></div></div>
}

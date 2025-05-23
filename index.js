import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home } from "lucide-react";

const products = [
  {
    name: "X-Frango",
    description: "Hamburguer com tal tal tal tal tal",
    image: "/xfrango.jpg",
    price: "12,00",
    extras: [
      { name: "Maionese Laranja", price: "2,00" },
      { name: "Maionese Pimenta", price: "2,00" },
      { name: "Barbecue", price: "2,00" },
    ],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-orange-500 text-white flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Home size={24} />
          <h1 className="font-bold text-xl">JUSAS'S BURGUER</h1>
        </div>
        <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
      </header>

      {/* Search */}
      <div className="p-4">
        <Input placeholder="Procure um lanchezinho vai!" className="w-full" />
      </div>

      {/* Banner */}
      <div className="px-4">
        <img src="/banner.jpg" alt="Banner" className="rounded-xl w-full" />
      </div>

      {/* Best sellers */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Os mais pedidos 🔥</h2>
        <div className="grid gap-4">
          {products.map((product, index) => (
            <Card key={index} className="flex gap-4 items-center">
              <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
              <CardContent className="flex-1">
                <h3 className="font-bold text-red-600">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </CardContent>
              <Button className="mr-4">R$ {product.price}</Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Product detail (static sample) */}
      <div className="p-4">
        <img src="/xfrango.jpg" alt="X-Frango" className="w-full rounded-xl mb-4" />
        <h2 className="text-xl font-bold">X-Frango</h2>
        <p className="text-sm text-gray-500 mb-4">Hamburguer com tal tal tal tal tal</p>
        <h3 className="font-bold mb-2">Dê uma olhada nos nossos adicionais!</h3>
        <div className="grid gap-2 mb-4">
          {products[0].extras.map((extra, i) => (
            <Card key={i} className="flex items-center justify-between px-4 py-2">
              <span>{extra.name}</span>
              <Button>R$ {extra.price}</Button>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <p className="mb-2">Gostou deste produto? Vamos conversar!</p>
          <Button className="bg-green-500 hover:bg-green-600">PAGAMENTO VIA WHATSAPP</Button>
        </div>
      </div>
    </div>
  );
}

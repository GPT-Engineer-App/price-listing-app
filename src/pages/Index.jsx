import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productName || !productPrice) {
      toast.error("Both fields are required.");
      return;
    }
    const newProduct = { name: productName, price: productPrice };
    setProducts([...products, newProduct]);
    setProductName("");
    setProductPrice("");
    toast.success("Product added successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Price Listing</h1>
      <form onSubmit={handleAddProduct} className="space-y-4 mb-6">
        <div>
          <Label htmlFor="productName">Product Name</Label>
          <Input
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            required
          />
        </div>
        <div>
          <Label htmlFor="productPrice">Product Price</Label>
          <Input
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Enter product price"
            required
          />
        </div>
        <Button type="submit" className="w-full">Add Product</Button>
      </form>
      <div className="space-y-4">
        {products.map((product, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Price: ${product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddProduct = () => {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      });
      //   console.log("Submitted:", res.data);
      //   alert("Product added successfully!");
      router.push("/product");
      // Clear form
      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
      });
    } catch (error) {
      console.error("Error posting product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-20 p-4 bg-[#c6ac8f] rounded-lg shadow text-black">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="input input-bordered w-full border border-[#22333b] px-2 py-2"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered w-full border border-[#22333b] px-2 py-2"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="input input-bordered w-full border border-[#22333b] px-2 py-2"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea textarea-bordered w-full border border-[#22333b] px-2 py-2"
          required
        />
        <button type="submit" className=" w-full bg-[#5e503f] px-3 py-2">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

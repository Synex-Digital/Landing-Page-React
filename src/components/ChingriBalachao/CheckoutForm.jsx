import React, { useState, useEffect } from "react";

const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  quantity,
  onQuantityChange,
}) => {
  return (
    <div className="p-4 border rounded-lg flex flex-col sm:flex-row justify-between items-center max-w-xl mx-auto mb-4">
      <div className="flex items-center mb-2 sm:mb-0">
        <img src={imageUrl} alt={name} className="w-16 h-16 mr-2" />
        <span className="font-semibold">{name}</span>
      </div>
      <div className="flex items-center space-x-4 mt-2 sm:mt-0">
        <button
          onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
          className="px-3 py-1 bg-gray-200 rounded"
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="font-semibold">{quantity}</span>
        <button
          onClick={() => onQuantityChange(id, Math.min(9, quantity + 1))}
          className="px-3 py-1 bg-gray-200 rounded"
          disabled={quantity === 9}
        >
          +
        </button>
      </div>
      <span className="font-semibold mt-2 sm:mt-0">
        ৳ {Math.ceil(quantity * price)}
      </span>
    </div>
  );
};

const CheckoutForm = ({ cartItems: initialCartItems }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [shippingCost, setShippingCost] = useState(120);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Order placed successfully!");
      // Here you would typically send the order data to your backend
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-hind-siliguri mt-12 sm:mt-24 border rounded-lg shadow-lg">
      <div className="text-[#00B22C] text-xl sm:text-2xl lg:text-3xl font-extrabold text-center p-12">
        অগ্রিম পেমেন্ট ছাড়া অর্ডার করতে নিচের ফর্মটি পূরণ করুন 👇
      </div>
      <h1 className="text-lg sm:text-xl font-bold font-poppins mt-8 sm:mt-16">
        আপনার কার্টে থাকা পণ্যসমূহ:
      </h1>
      <div className="mt-2">
        {cartItems.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            quantity={item.quantity}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-8">
        <div className="w-full lg:w-1/2">
          <div className="max-w-md mx-auto my-6">
            <h2 className="text-xl font-bold mb-4">Billing details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">আপনার নাম *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded`}
                  placeholder="আপনার নাম লিখুন"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block mb-1">মোবাইল নাম্বার *</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  } rounded`}
                  placeholder="মোবাইল নাম্বার লিখুন"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
              <div>
                <label className="block mb-1">সম্পূর্ণ ঠিকানা *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  } rounded`}
                  placeholder="সম্পূর্ণ ঠিকানা লিখুন"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                🔒 Place Order ৳ {total}
              </button>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="max-w-md mx-auto p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Your order</h2>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Product</span>
              <span className="font-semibold">Subtotal</span>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2 border-t"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-12 h-12 mr-2"
                  />
                  <span>
                    {item.name}({item.quantity})
                  </span>
                </div>
                <span>৳ {item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between py-2 border-t">
              <span>Subtotal</span>
              <span>৳ {subtotal}</span>
            </div>
            <div className="py-2">
              <span className="font-semibold">Shipping</span>
              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="shipping"
                    value="60"
                    checked={shippingCost === 60}
                    onChange={() => setShippingCost(60)}
                    className="form-radio"
                  />
                  <span>ঢাকার মধ্যে: ৳ 60</span>
                </label>
                <label className="flex items-center space-x-2 mt-1">
                  <input
                    type="radio"
                    name="shipping"
                    value="120"
                    checked={shippingCost === 120}
                    onChange={() => setShippingCost(120)}
                    className="form-radio"
                  />
                  <span>ঢাকার বাইরে: ৳ 120</span>
                </label>
              </div>
            </div>
            <div className="flex justify-between py-2 border-t font-bold">
              <span>Total</span>
              <span>৳ {total}</span>
            </div>
            <div className="mt-4 p-2 bg-gray-100 rounded">
              <p className="text-sm">Cash on delivery</p>
              <p className="text-xs text-gray-600">
                সম্পূর্ণ ক্যাশ অন হোম ডেলিভারী দেয়া হয়
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;

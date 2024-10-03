import React from 'react';

const PricingSection = () => {
  const pricingData = [
    {
      weight: '৫০০ গ্রাম',
      oldPrice: '১১০০',
      newPrice: '৮০০',
    },
    {
      weight: '১ কেজি',
      oldPrice: '১৯৫০',
      newPrice: '১৫৫০',
    },
  ];

  return (
    <section className="bg-white py-6 hidden lg:block">
      <div className="max-w-screen-lg mx-auto text-center">
        {pricingData.map((item, index) => (
          <div key={index} className="my-6">
            {/* Pricing Information */}
            <p className="text-3xl font-bold">
              {item.weight} এর পূর্বমূল্য{' '}
              <span className="line-through text-red-500 font-bold">
                {item.oldPrice} টাকা
              </span>{' '}
              এখন ছাড়ে{' '}
              <span className="text-green-600 font-bold">{item.newPrice} টাকা</span>
            </p>

            {/* Divider */}
            {index < pricingData.length - 1 && <hr className="my-4" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

import React from 'react';

const BrandLogo = ({ name }) => {
  // Yahan aap generic styles daal sakte hain jo sabhi logos par apply hogi
  const style = "flex items-center justify-center font-bold text-3xl md:text-4xl tracking-tight uppercase whitespace-nowrap";

  // Name ke basis par logic (sirf styling ya specific formatting ke liye)
  const renderContent = () => {
    switch (name.toLowerCase()) {
      case 'deloitte':
        return <div className={style + " text-[#434343]"}>deloitte<span className="text-[#86BC25] font-serif text-5xl">.</span></div>;
      case 'techmahindra':
        return <div className="flex flex-col items-center leading-none text-2xl font-extrabold"><span className="text-[#6D6E71]">TECH</span><span className="text-[#E31B23] font-light mt-1">mahindra</span></div>;
      case 'paperboat':
        return <div className={style + " text-gray-500 italic lowercase"}>paper boat</div>;
      default:
        return <div className={style + " text-gray-800"}>{name}</div>;
    }
  };

  return <div className="h-full flex items-center justify-center">{renderContent()}</div>;
};

export default BrandLogo;
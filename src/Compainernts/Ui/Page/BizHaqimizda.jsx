import React from 'react';
import "../Style/BizHaqimizda.scss";

const BizHaqimizda = () => {
  return (
    <div className="biz-haqimizda-container">
      <h2>Biz Haqimizda</h2>
      <div className="content">
        <p>
          <strong>"Osh Markazi"</strong> - bu o'zining an'anaviy osh va boshqa milliy taomlari bilan mashhur bo'lgan restoran. 
          Bizning maqsadimiz mijozlarimizga yuqori sifatli xizmat ko'rsatish va ularga o'zbek oshxonasining eng mazali va an'anaviy taomlarini taqdim etishdir.
        </p>
        <p>
          Osh Markazining o'ziga xosligi shundaki, biz faqatgina eng yaxshi mahsulotlarni tanlab, ularni an'anaviy usullarda tayyorlaymiz.
          Har bir taomimizda bizning tajribali oshpazlarimizning mehnati va ishiga bo'lgan hurmat aks etadi.
        </p>
        <p>
          Restoranimizda oila a'zolari, do'stlar va ishbilarmonlar uchun qulay muhit yaratilgan. Siz bizda nafaqat mazali taomlar, balki xushmuomalalik va xizmat sifati bilan ham ajralib turadigan tajriba kutishingiz mumkin.
        </p>
      </div>
      <div className="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2DqtMtMKJZ1_WUVqJeL3OcHWLL17jh6gxQ&s" alt="Osh Markazi" />
      </div>
    </div>
  );
};

export default BizHaqimizda;

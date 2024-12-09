import React, { useState } from 'react'
import "../Style/Aloqa.scss"

const Aloqa = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Ma'lumotlar muvaffaqiyatli yuborildi!");
  };
  return (
    <div className="form-container">
    <h2>Ro'yxatdan o'tish</h2>
    <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Ism</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ismingizni kiriting"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Emailingizni kiriting"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Parol</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Parolingizni kiriting"
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Yuborish
      </button>
    </form>
    <div className="aloqa_left">
      <img src={`${process.env.PUBLIC_URL}/Img/bg.jpg`}  alt="" />
    </div>
    <div className="maps">
    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.221052227804!2d144.96316091571738!3d-37.81421774274388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43c29f5f3d%3A0xc08a1e5902cbfd9b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1632739477317!5m2!1sen!2sau"
            width="1130"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
    </div>
    </div>
  </div>

  )
}

export default Aloqa
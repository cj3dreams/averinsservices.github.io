import React from "react";

// Don't forget to
// // download the CSS file too OR 
// // remove the following line if you're already using Tailwind 
import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
    	<div className="w-[1200px] min-h-[1400px] mx-auto bg-neutral-50 shadow-lg rounded-lg p-8">
    	  <header className="flex justify-between items-center">
    	    <h1 className="text-4xl font-title text-primary">Averins Services</h1>
    	    <nav>
    	      <ul className="flex space-x-4">
    	        <li><a href="#services" className="text-lg">Services</a></li>
    	        <li><a href="#about" className="text-lg">About</a></li>
    	        <li><a href="#feedback" className="text-lg">Feedback</a></li>
    	        <li><a href="#contact" className="text-lg">Contact</a></li>
    	      </ul>
    	    </nav>
    	  </header>
    	
    	  <section id="hero" className="relative mt-8">
    	    <img src="https://cdn.webcrumbs.org/assets/images/ask-ai/bgs/1.svg" className="w-full h-[400px] object-cover rounded-lg" alt="Hero Background" />
    	    <div className="absolute inset-0 flex flex-col justify-center items-center text-neutral-50">
    	      <h2 className="text-5xl font-title">Professional Appliance Repair Services</h2>
    	      <p className="text-2xl mt-4">We repair all home appliances with expertise & care</p>
    	    </div>
    	  </section>
    	
    	  <section id="services" className="mt-16">
    	    <h3 className="text-3xl font-title text-center mb-8">Our Services</h3>
    	    <div className="grid grid-cols-3 gap-8">
    	      {["Fridge Repair", "Washing Machine Repair", "Dishwasher Repair", "Oven Repair", "Microwave Repair", "Air Conditioner Repair"].map(service => (
    	        <div className="bg-neutral-100 rounded-md p-4 text-center">
    	          <img src={`https://tools-api.webcrumbs.org/image-placeholder/200/200/${service.toLowerCase().replace(" ", "-")}/1`} className="w-48 h-48 mx-auto object-cover mb-4" alt={`${service}`} />
    	          <h4 className="text-xl mb-2">{service}</h4>
    	          <p className="text-lg">Reliable & quick service for your {service.toLowerCase()}</p>
    	        </div>
    	      ))}
    	    </div>
    	  </section>
    	
    	  <section id="about" className="mt-16">
    	    <h3 className="text-3xl font-title text-center mb-8">About Us</h3>
    	    <p className="text-lg text-center mx-auto w-3/4">Averins Services has been providing top-notch appliance repair services for over 10 years. Our team of experts is dedicated to ensuring that your home appliances are in perfect working order.</p>
    	  </section>
    	
    	  <section id="feedback" className="mt-16">
    	    <h3 className="text-3xl font-title text-center mb-8">Customer Feedback</h3>
    	    <div className="space-y-8">
    	      {[
    	        { name: "John Doe", feedback: "Excellent service! My fridge was fixed in no time." },
    	        { name: "Jane Smith", feedback: "Very professional and reliable. Highly recommend Averins Services." },
    	        { name: "Paul Wilson", feedback: "Quick and efficient service. My washing machine works like new now." }
    	      ].map(({ name, feedback }, idx) => (
    	        <div key={idx} className="bg-neutral-100 rounded-md p-4">
    	          <p className="text-lg">{feedback}</p>
    	          <p className="text-right mt-2">- {name}</p>
    	        </div>
    	      ))}
    	    </div>
    	  </section>
    	
    	  <section id="contact" className="mt-16 mb-8">
    	    <h3 className="text-3xl font-title text-center mb-8">Contact Us</h3>
    	    <div className="flex flex-col items-center">
    	      <h4 className="text-2xl mb-4">We are here to help you</h4>
    	      <p className="text-lg mb-4">Phone: +123 456 789</p>
    	      <p className="text-lg mb-4">Email: averins.services@example.com</p>
    	    </div>
    	  </section>
    	</div> 
    </div>
  )
}


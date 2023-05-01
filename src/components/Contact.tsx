import { Button } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <div id="contact">
      <div className="   main-margin flex flex-col items-center section-py">
        <div className="font-audio header-text mb-24"> 👉 Let's do something great together</div>
        <div className="body-text">Contact me at</div>
        <div className="body-text"> Email: nhumai.ktqd@gmail.com</div>
        <div className="body-text"> what'sapp: +84 898980338 </div>
        <div className="body-text">Phone: +65 8683 2769</div>

        <a href="mailto:nhumai.ktqd@gmail.com" className="no-underline">
          <div className="body-text font-audio py-5 px-12 rounded-xl bg-violet hover:bg-pink dark:bg-yellow text-white dark:text-darkGray dark:hover:bg-neonGreen my-16">
            Email Me
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;

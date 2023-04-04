import React from "react";

function Experience() {
  return (
    <div className="main-margin section-mt flex flex-col items-center gap-5 ">
      <div className="header-text dark:text-yellow font-audio">My Working Journey</div>
      <p className="body-text ">
        "Climb mountains not so the world can see you, but so you can see the world."{" "}
        <span className="text-violet dark:text-orange">- David McCullough Jr.</span>
      </p>
      <a href="/work">
        <button className="px-5 py-2 border rounded-lg border-violet/50 hover:bg-violet/50 dark:border-offWhite dark:hover:text-yellow dark:hover:bg-darkGray dark:hover:border-darkGray">
          Check out Katy's Work Experience
        </button>
      </a>
    </div>
  );
}

export default Experience;

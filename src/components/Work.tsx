import React from "react";
import styles from "../styles/work.module.css";
import { Interface } from "readline";

interface TimeProps {
  time: string;
  title: string;
  company: string;
  tip: string;
}

const Timetab = ({ time, title, company, tip }: TimeProps) => {
  return (
    <li className={`${styles.timelineli} text-[14px] lg:text-[24px]`} data-title={tip}>
      <time dateTime="2012-sept" className={`${styles.time}`}>
        {time}
      </time>
      {title} <br /> {company}
    </li>
  );
};

function Work() {
  return (
    <div className="mt-12">
      <div className="h-12 bg-lightPink dark:bg-darkGray"></div>
      <div className={` ${styles.timeline}`}>
        <ul className={`${styles.timelineul}`}>
          <Timetab
            time={"2012-2016"}
            title={"Investment"}
            company={"National Economics University of Vietnam"}
            tip={
              "Content marketing planning for 20+ websites, Youtube, facebook and other company's social media accounts. Boost sales and Brand awareness by 30%"
            }
          />

          <Timetab
            time={"Nov March 2017- April 2022"}
            title={"Project/Account Manager "}
            company={" Vietnam Fortress Tools JSC (Vietnam)"}
            tip={
              "Managed $7-10M annual sale projects, opened $2-3M new accounts, be main contact for factory toward key clients including Walmart, OBI, Talent Tools, Kaufland and some more DYI store chains.  "
            }
          />
          <Timetab
            time={"August 2022-Now"}
            title={"Front End Developer"}
            company={" boomco.org (Korean-remote)"}
            tip={
              "Develop Frontend for Goverment app (connecting supplier with buyer), Mobile App - Accounting for small business and Blockchain platfrom to trade NTF. Using Reactjs and React Native"
            }
          />

          <Timetab
            time={"March 2023-April2023"}
            title={"Front End developer / Scrum Master "}
            company={"Dmple Studio (Singapore - Get Scammed :sad )"}
            tip={
              "Develop Landing Page and Run Scrum Team for Marking + Tech team, Got Scammed, long story, Pm me you if you're interested to here more. Whatsapp +84 89898 0338"
            }
          />

          <Timetab
            time={"April-2023-Now"}
            title={"Co-founder"}
            company={"Side project with the amazing friend I got after the above Scam"}
            tip={
              "Got Scam, but then got an amazing team of developers and martering and Product Manager. We decided to make something toghether."
            }
          />
        </ul>
      </div>
      <div className="h-24 bg-lightPink dark:bg-darkGray"></div>
    </div>
  );
}

export default Work;

export interface Experience {
  dates: string;
  position: string;
  company: string;
  location: string;
  description: Array<string>;
  imgUrl: string;
}

const experience: Array<Experience> = [
  {
    dates: "October  2022 - Present",
    position: "App Developer",
    company: "Interactive Investor",
    location: "Manchester",
    description: [
      "Developing high-quality mobile native app features in React Native + TypeScript from scratch",
      "Creating Next.js API routes",
      "Building web UI components using React.js + TypeScript from scratch",
      "Developing content management system features",
    ],
    imgUrl:
      "https://media.licdn.com/dms/image/D4E0BAQHgr9CXLpsLpg/company-logo_200_200/0/1697626095762/interactive_investor_logo?e=1720656000&v=beta&t=DF__Ar33pDaxp-y4WSHr9vyC3ievrvwOsjcJ9n6zamQ",
  },
  {
    dates: "April  2022 - August 2022",
    position: "Payments Business Development Manager",
    company: "Avanta",
    location: "Kyiv",
    description: [
      "Connected new payment solutions by constant research and negotiations",
    ],
    imgUrl:
      "https://media.licdn.com/dms/image/D4D0BAQE3xetrEWd3lg/company-logo_200_200/0/1666092500012/sequoianetwork_logo?e=1720656000&v=beta&t=Uk5xHGTcmfsaOad9bXdVl0V9tcz1kmc0TmGh6OXV_-g",
  },
  {
    dates: "November  2021 - April 2022",
    position: "Billing Manager",
    company: "Bistox Holding OU",
    location: "Kyiv",
    description: [
      "Brought sales to the company by connecting payment gateways",
      "Resolved payment issues with setting up routing & cascading",
    ],
    imgUrl:
      "https://media.licdn.com/dms/image/C4D0BAQF9PMk_UTduew/company-logo_200_200/0/1630559996365/bistox_exchange_logo?e=1720656000&v=beta&t=n6ZG_FqWpqMN037ErjIDmT4LgC9x9_G-JGl48c6OA8U",
  },
  {
    dates: "September  2019  - October 2021",
    position: "Billing Manager",
    company: "BI-Online Solutions",
    location: "Kyiv",
    description: [
      "Increased sales by 50% by the constant research of the relevant B2B or B2C bank account providers",
    ],
    imgUrl:
      "https://media.licdn.com/dms/image/C4E0BAQEO7QjCzBYK8w/company-logo_200_200/0/1630566244224?e=1720656000&v=beta&t=LS7k7tUexEO2mrM6proGbR6DQSyiNZi2W0prdiGTXv8",
  },
];

export default experience;

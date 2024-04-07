interface BadgeProps {
  label: string;
  logo: {
    name: string;
    color: string;
  };
}

const blueLogoColor = "61DAFB";

const badge: Array<BadgeProps> = [
  {
    label: "TypeScript",
    logo: {
      name: "typescript",
      color: blueLogoColor,
    },
  },
  {
    label: "React_Native",
    logo: {
      name: "react",
      color: blueLogoColor,
    },
  },
  {
    label: "React.JS",
    logo: {
      name: "react",
      color: blueLogoColor,
    },
  },
  {
    label: "Next.JS",
    logo: {
      name: "nextdotjs",
      color: "F1F0EA",
    },
  },
  {
    label: "JavaScript",
    logo: {
      name: "javascript",
      color: "F7DF1E",
    },
  },
  {
    label: "Redux",
    logo: {
      name: "redux",
      color: "blueLogoColor",
    },
  },
  {
    label: "HTML5",
    logo: {
      name: "html5",
      color: "E34F26",
    },
  },
  {
    label: "CSS3",
    logo: {
      name: "css3",
      color: "1572B6",
    },
  },
  {
    label: "Bootstrap",
    logo: {
      name: "Bootstrap",
      color: "563D7C",
    },
  },
  {
    label: "Figma",
    logo: {
      name: "figma",
      color: "F24E1E",
    },
  },
  {
    label: "Adobe%20XD",
    logo: {
      name: "Adobe%20XD",
      color: "FF61F6",
    },
  },
  {
    label: "Adobe%20Photoshop",
    logo: {
      name: "Adobe%20Photoshop",
      color: "31A8FF",
    },
  },
];

export default badge;

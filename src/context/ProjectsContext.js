import React, { createContext, useState } from "react";
// PROTOTYPE
import test1 from "../assets/thumbnails/prototype/img1.png";
import w1 from "../assets/thumbnails/prototype/w1.png";
import f1 from "../assets/thumbnails/prototype/f1.png";
import mockup from "../assets/thumbnails/prototype/ff1.png";
import color from "../assets/thumbnails/prototype/colors.png";

// SHOPPA
import shoppaHeader from "../assets/thumbnails/shoppa/shoppHeader.png";
import shoppaWebsite from "../assets/thumbnails/shoppa/shoppaPage.png";
import shoppaSketch from "../assets/thumbnails/shoppa/shoppaSketch.png";
import shoppaWireframe from "../assets/thumbnails/shoppa/shoppaWireframe.png";

export const ProjectProvider = createContext();
function ProjectsContext(props) {
  const [work, setWork] = useState(null);
  const projects = [
    {
      id: 1,
      type: null,
      category: "React",
      title: "KASHMI",
      description: "Online banking App",
      inspiration:
        "UiUx Case Study: Experience money transactions like never before with Kashmi App! Keep track of your spending and make online purchases with ease - all in one secure and unique design!",
      projectImage: test1,
      userReview: [
        {
          name: "John Doe",
          age: "99",
          img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          fasutration:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Unde, a!",
          goal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, a!"
        },
        {
          name: "Helen Doe",
          age: "88",
          img: "https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg?auto=compress&cs=tinysrgb&w=600",
          fasutration:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Unde, a!",
          goal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, a!"
        }
      ],
      userFlow: null,
      sketches: null,
      wireFrame: [w1],
      finalDesign: [f1],
      mockupdesign: mockup,
      color: color,
      liveLink: null,
      figmaDesignLink:
        "https://www.figma.com/file/pjMsRm6ogwdA8YKUKFK3Vn/KasshMi?node-id=0%3A1&t=Mt3E36Q1RH2yYmXp-0",
      designProcess: null,
      projectTimeLine: null,
      userResearch: null
    },
    {
      id: 2,
      type: null,
      category: "React",
      title: "SHOPPA",
      description: "e Commerce Shopping Website",
      inspiration:
        "Shoppa provide users with an even more stress-free online shopping experience. I would be honored to have the chance to work with recruiters and demonstrate my abilities.",
      projectImage: shoppaHeader,
      userReview: [
        {
          name: "John Doe",
          age: "99",
          img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          fasutration:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Unde, a!",
          goal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, a!"
        },
        {
          name: "Helen Doe",
          age: "88",
          img: "https://images.pexels.com/photos/1559086/pexels-photo-1559086.jpeg?auto=compress&cs=tinysrgb&w=600",
          fasutration:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Unde, a!",
          goal: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, a!"
        }
      ],
      userFlow: null,
      sketches: shoppaSketch,
      wireFrame: [shoppaWireframe],
      finalDesign: [shoppaWebsite],
      mockupdesign: null,
      color: null,
      liveLink: "https://nehldotjs.github.io/shoppa-page/",
      figmaDesignLink:
        "https://www.figma.com/file/I8mVSbcHYYs2DvNiBgcmJc/shoppa?node-id=2%3A2&t=liZYPh8eJOWVHdIp-0",
      designProcess: null,
      projectTimeLine: null,
      userResearch: null
    }
  ];
  return (
    <ProjectProvider.Provider value={{ projects, work, setWork }}>
      {props.children}
    </ProjectProvider.Provider>
  );
}

export default ProjectsContext;

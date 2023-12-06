import { dioganalArrow } from "@/app/Base/SVG";
import React from "react";
import Slider from "react-slick";
const workList = [
  {
    id: "1",
    title: "Intake",
    desc: "We listen, analyze, and strategize to understand your unique needs and goals. insights gained during intake, driving progress and change. It is the pivotal step in problem-solving, and the transition from planning to execution.",
  },
  {
    id: "2",
    title: "Action",
    desc: "The action phase is where decisions are made and strategies are put into motion based on the insights gained during intake, driving progress and change. It is the pivotal step in problem-solving, and the transition from planning to execution.",
  },
  {
    id: "3",
    title: "Growth",
    desc: "Constant refinement ensures continuous improvement and sustained success. insights gained during intake, driving progress and change. It is the pivotal step in problem-solving, and the transition from planning to execution.",
  },
  {
    id: "4",
    title: "Intake",
    desc: "We listen, analyze, and strategize to understand your unique needs and goals. insights gained during intake, driving progress and change. It is the pivotal step in problem-solving, and the transition from planning to execution.",
  },
];
export default function Work() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="work">
      <div className="work__bg">
        <div className="work__bg-shape">
          <img src="./images/work/shape.svg" alt="" />
        </div>
        <div className="work__bg-line">
          <img src="./images/work/curved-line.svg" alt="" />
        </div>
        <div className="work__bg-item">
          <img src="/images/work/line-1.svg" alt="" />
        </div>
        <div className="work__bg-item center">
          <img src="/images/work/line-2.svg" alt="" />
        </div>
        <div className="work__bg-item bottom">
          <img src="/images/work/line-3.svg" alt="" />
        </div>
      </div>
      <div className="auto__container">
        <div className="work__inner">
          <div className="work__inner-title">
            <h6 className="sup">Good Morning</h6>
            <h2 className="big">Unveiling Our Unique Work Approach</h2>
            <p>
              "Experience our distinct methodology that fuses creativity,
              data-driven insights, and innovation. We transform your vision
              into results with a work approach that's truly one-of-a-kind.
            </p>
          </div>
          <Slider className="work__inner-slider" {...settings}>
            {workList.map((item, index) => {
              return <WorkItem {...item} key={index} />;
            })}
          </Slider>
          <div className="work__inner-row">
            {workList.map((item, index) => {
              return <WorkItem {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
const WorkItem = (props) => {
  return (
    <div className="workItem">
      <div className="workItem__number">
        <span>{props.id}</span>
      </div>
      <div className="workItem__content">
        <h5>{props.title}</h5>
        <div className="workItem__content-text">
          <p>{props.desc}</p>
        </div>
        <a href="#">
          Road to Results
          {dioganalArrow}
        </a>
      </div>
    </div>
  );
};

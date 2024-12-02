import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const aboutData = [
    {
      image: "/assets/about/1.svg",
      title: "Intuitive Learning",
      description:
        "Engage with interactive simulations that make learning electromagnetics more intuitive and fun.",
    },
    {
      image: "/assets/about/2.svg",
      title: "Hands-on Experiments",
      description:
        "Perform virtual experiments to understand the principles of electromagnetics better.",
    },
    {
      image: "/assets/about/3.svg",
      title: "Content Generated by Experts",
      description:
        "Learn from experts in the field with  curated contnt and explanations.",
    },
  ];

  const topicData = [
    {
      image: "/assets/vector-algebra.png",
      title: "Vector Algebra",
    },
    {
      image: "/assets/vector-calculus.png",
      title: "Vector Calculus",
    },
    {
      image: "/assets/electrostatics.png",
      title: "Electrostatics",
    },
    {
      image: "/assets/maxwell.png",
      title: "Maxwell Equations",
    },
  ];

  return (
    <main className=" px-12">
      <div
        className="absolute top-0 left-0 h-[80vh] w-screen -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(187,223,255,1) 0%, rgba(187,223,255,1) 59%, rgba(255,255,255,1) 100%)",
        }}
      ></div>
      <div className="flex items-center h-[40vh]">
        <div className="w-1/2  text-4xl font-extrabold p-8">
          Electromagnetic Insights:
          <br /> Dive into Theory with our Virtual Laboratory
        </div>
        <div className="w-1/2">
          <img src="/assets/hero.png" />
        </div>
      </div>
      <div className="mt-64 flex flex-col gap-6 items-center">
        <div className="font-semibold text-3xl p-4">About the Virtual Lab</div>
        <div className="max-w-[43rem] text-center">
          The Electromagnetics Virtual Laboratory is a revolutionary educational
          tool designed to assist college students in mastering the complex
          concepts of electromagnetics. Our virtual lab simulates real-world
          scenarios and experiments to provide a hands-on learning experience.
        </div>
        <Button>Learn More</Button>
      </div>

      <div className="flex gap-4 my-40">
        {aboutData.map((card, index) => {
          return (
            <Card key={index} className="w-1/3">
              <CardHeader>
                <img src={card.image} height={36} width={36} />
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
      <div className="my-20">
        <h3 className="text-center font-semibold text-4xl">Get Started</h3>
        <div className="flex flex-wrap gap-8 justify-center my-10">
          {topicData.map((card, index) => {
            return (
              <Link to={`/content/${index + 1}`}>
                <Button
                  key={index}
                  className=" bg-white shadow-lg p-36 flex flex-col gap-4 h-20 text-black hover:text-white"
                >
                  <div>
                    <img src={card.image} height={100} width={100} />
                  </div>
                  <div className="text-2xl ">{card.title}</div>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;

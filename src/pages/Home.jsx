import BarsInPage from "../components/BarsInPage";
import HoveringOval from "../components/HoveringOval";

const Home = () => {
  return (
    <div className="relative min-h-screen text-2xl max-w-screen-2xl mx-auto home-gradient z-20">      
      <HoveringOval position={"right-10 top-20"} />
      <BarsInPage style={'top-10'} />
      <div className="relative z-10 min-h-99 flex flex-col gap-5 justify-center max-w-screen-lg mx-auto">
        <h4 className="font-normal text-gray-400">full-stack web developer</h4>
        <h1 className="font-bold text-4xl text-white">Devesh Wadibhasme</h1>
        <p className="font-normal text-gray-400 text-lg">Crafting Digital Experiences with Code and Creativity</p>
      </div>

      

    </div>
  );
};

export default Home;

import { logo } from "../assets/index";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between item-center pt-3 mb-10">
        <img src={logo} alt="sumrizer" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summerize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
        accusamus sint at culpa fugit ut sit, delectus repellat facilis vel
        dicta, ratione esse, placeat maiores. Atque adipisci rerum nulla eum?
      </h2>
    </header>
  );
};

export default Hero;

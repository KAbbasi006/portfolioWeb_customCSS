import Image from "next/image";
import Link from "next/link";
const portfolioData = [
  { name: "Todo List App", category: " Command: npx k9_todo_list", imageSrc: "/todo.jpg" },
  { name: "Number Guessing", category: "Command: npx k9_cli_number_guessing_game", imageSrc: "/number_guessing_game.jpg" },
  { name: "Currency Converter", category: "Command: npx k9_cli_currency_conveter_project", imageSrc: "/currency_converter.jpg" },
  { name: "Calculator", category: "Command: npx k6_simple_cli_calculator", imageSrc: "/calculator.jpg" },
  { name: "ATM", category: "Command: npx k6_cli_atm_project", imageSrc: "/atm.jpg" },

  // Add more projects as needed
];
const portfolioData2 = [
  { name: "Modern Furnishings", category: "https://assignment7-modern-furnishings-f7g51b42q-komal-abbasis-projects.vercel.app", imageSrc: "/modernFurnishings.png" },
  { name: "World Plate Restaurant", category: "https://world-plate-restaurant.netlify.app/", imageSrc: "/worldPlate.png" },
  { name: "Mini Portfolio Website", category: "https://assignment5-portfolio-website-odq36tdk8-komal-abbasis-projects.vercel.app", imageSrc: "/portfolio.png" },
  { name: "Resume Builder App", category: "https://milestone4and5-editable-resume-3u7bzky91-komal-abbasis-projects.vercel.app", imageSrc: "/CV.png" }
]
const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        {/* Portfolio Title */}
        <h2 className="section-title">Portfolio</h2>

        {/* CLI Projects Buttons */}
        <div className="button-container">
          <button className="button">
            CLI Projects
          </button>
        </div>
        <div className="text-center">
          <p>Check out these mini CLI Projects by running these commands on your Command Prompt.</p>
        </div>
        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioData.map((project, index) => (
            <div key={index} className="portfolio-card">
              {/* Project Image */}
              <Image src={project.imageSrc} alt={project.name} width={500}
                height={350} className="portfolio-image" />
              {/* Project Info */}
              <div className="portfolio-info">
                <h3 className="portfolio-name">{project.name}</h3>
                <p className="portfolio-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <br /><br /><br /><br />
        {/* Mini Website Projects Buttons */}
        <div className="button-container">
          <button className="button">
            Mini Website Projects
          </button>
        </div>
        <div className="text-center">
          <p>Check out these mini Website Projects by clicking on  their live Demo link! </p>
        </div>
        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioData2.map((project, index) => (
            <div key={index} className="portfolio-card">
              {/* Project Image */}
              <Image src={project.imageSrc} alt={project.name} width={500}
                height={350} className="portfolio-image" />
              {/* Project Info */}
              <br />
              <div className="portfolio-info">
                <h3 className="portfolio-name">{project.name}</h3>
                <p className="portfolio-category"><span>Live Demo: </span>  <Link href={`${project.category}`} target="_blank" rel="noopener noreferrer"> Click here tou view Website</Link></p>
              </div>
            </div>
          ))}
        </div>



      </div>

    </section>
  );
};

export default PortfolioSection;

import "./featurs.css";
import Feature from "../../components/feature/Feature";

const featuresData = [
  //1
  {
    title: "Improving end distrusts instantly ",
    Text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  //2
  {
    title: "Become the tended active",
    Text: "From they fine john he give of rich he. They age and draw Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. like. Improving end distrusts may instantly was household applauded.",
  },
  //3
  {
    title: "Message or am nothing ",
    Text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  //4
  {
    title: "Really boy law county ",
    Text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((feature, index) => {
          return (
            <Feature
              title={feature.title}
              text={feature.Text}
              key={feature.title + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;

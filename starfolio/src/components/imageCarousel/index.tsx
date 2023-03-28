import Carousel from "nuka-carousel/lib/carousel";
import Go from "../../../public/go.png";
import Impulse from "../../../public/nlwimpulse.png";
import Goldies from "../../../public/goldie.png";
import Sherlock from "../../../public/sherlock.png";
import "./carousel.css";

export const ImageCarousel = () => {
  return (
    <>
    <div className="control">
        <Carousel className="control" adaptiveHeight wrapAround cellAlign="right">
          <div>
            <a
              href="https://github.com/CarlosEduardoAD/go_ing-on"
              target={"_blank"}
              style={{
                position: "relative",
                top: "12rem",
                left: "32rem",
                fontSize: "16px",
                textDecoration: "none",
                padding: "8px 24px 8px 24px",
                color: "var(--white-1)",
                fontWeight: "bold",
                backgroundColor: "var(--black-2)",
                borderRadius: "5px",
              }}
            >
              Acessar
            </a>
            <img src={Go}></img>
          </div>
          <div>
            <a
              href="https://github.com/CarlosEduardoAD/nlw-impulse-carlos"
              target={"_blank"}
              style={{
                position: "relative",
                top: "12rem",
                left: "32rem",
                fontSize: "16px",
                textDecoration: "none",
                padding: "8px 24px 8px 24px",
                color: "var(--white-1)",
                fontWeight: "bold",
                backgroundColor: "var(--black-2)",
                borderRadius: "5px",
              }}
            >
              Acessar
            </a>
            <img src={Impulse} alt="" />
          </div>
          <div>
            <a
              href="https://github.com/CarlosEduardoAD/sa-senai-vinil"
              target={"_blank"}
              style={{
                position: "relative",
                top: "12rem",
                left: "32rem",
                fontSize: "16px",
                textDecoration: "none",
                padding: "8px 24px 8px 24px",
                color: "var(--white-1)",
                fontWeight: "bold",
                backgroundColor: "var(--black-2)",
                borderRadius: "5px",
              }}
            >
              Acessar
            </a>
            <img src={Goldies} alt="" />
          </div>
          <div>
            <a
              href="https://github.com/CarlosEduardoAD/sherlock_project"
              target={"_blank"}
              style={{
                position: "relative",
                top: "12rem",
                left: "32rem",
                fontSize: "16px",
                textDecoration: "none",
                padding: "8px 24px 8px 24px",
                color: "var(--white-1)",
                fontWeight: "bold",
                backgroundColor: "var(--black-2)",
                borderRadius: "5px",
              }}
            >
              Acessar
            </a>
            <img src={Sherlock} alt="" />
          </div>
        </Carousel>
        </div>
    </>
  );
}

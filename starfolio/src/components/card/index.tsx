import "./card.css";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export const Card = ({ title, description, link }: CardProps) => {
  return (
    <div className="link-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target='_blank'>Acessar</a>
    </div>
  );
}

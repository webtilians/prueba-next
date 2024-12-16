interface CardProps {
    children: React.ReactNode;
    title?: string;
  }
  
  const Card: React.FC<CardProps> = ({ children, title }) => {
    return (
      <div className="p-4 bg-white rounded-md shadow-md">
        {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
        <div>{children}</div>
      </div>
    );
  };
  
  export default Card;
  
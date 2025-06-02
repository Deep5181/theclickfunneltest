const Button = ({ to, text, icon: Icon, className = "" }) => {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-300 
        bg-[#131313] hover:bg-gray-800 ${className}`}
      >
        {Icon && <Icon size={18} />}
        <span className="inherit">{text}</span>
      </a>
    );
  };
  
  export default Button;
  
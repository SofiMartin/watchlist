const Button = ({ children, onClick, className, variant = "primary" }) => {
    const buttonStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
      outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    };
  
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-lg shadow-md transition duration-300 transform ${buttonStyles[variant]} ${className} hover:scale-105`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  
const LoginInput = ({ name, type, placeholder, value, onChange }) => {
    return (
      <>
          <input
            className="h-[48px] w-full px-[20px] outline-none font_body_regular md:content"
            name={name}
            placeholder={placeholder} 
            type={type}
            value={value}
            onChange={onChange}
          />
      </>
    );
  };
  
  export default LoginInput;
  
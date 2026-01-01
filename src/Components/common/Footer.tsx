const Footer = () => {
  return (
    <footer className="w-full h-16 bg-blue-600 flex items-center justify-center">
      &copy; {new Date().getFullYear()} Weather App
    </footer>
  );
};
export default Footer;

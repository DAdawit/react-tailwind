const Footer = () => {
  const today = new Date();
  return (
    <footer className="text-center">
      copyright &copy; {today.getFullYear()}
    </footer>
  );
};

export default Footer;

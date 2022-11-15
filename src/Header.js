const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-around mx-auto pl-10 pt-4 ">
        <div>
          <img src="/logo192.png" width={46}></img>
        </div>
        <div className="flex justify-center  space-x-5">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* <nav className="flex flex-row mx-auto p-6 space-x-8">
        <div className="space-x-8">
        <div className="pt-2 mr-10 flex flex-row justify-start">
          <img src="/logo192.png" width="46px" />
        </div>
        <div className="flex  justify-center  space-x-6 mt-5">
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>

          <ul className="flex space-x-6 mt-5">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </div>
        </div>
      </nav> */}
    </header>
  );
};
export default Header;

import profile from "../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
      <img className="w-12" src={profile}></img>
    </div>
  );
};

export default Header;

import Header from "../components/Header";
import Main from "./Main";
import Footer from "../components/Footer";

const Home = () => {
  //states

  return (
    <>
      <div
        className="text-black"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhpa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <title>nine4</title>
        <link rel="icon" href="/favicon.png" />
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default Home;

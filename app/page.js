import Feed from "@components/feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-centre">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="blue_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
          Vicappa is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
        {/*feed */}
        <Feed />
      </section>
    </div>
  );
};

export default Home;

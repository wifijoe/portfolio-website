const Home = () => {
  return (
    <div className="flex-1 dark:bg-gray-900 dark:text-white font-mono subpixel-antialiased">
      <div className="flex flex-row">
        <div className="flex-1">
          <h1 className="text-center pt-5 text-4xl">
            Lorem ipsum
          </h1>
          <p className="p-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
            In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. 
            Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. 
            Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>

        <div className="flex flex-col p-8 text-4xl">
          <p className="text-center pb-5">
            Ash Hammond
          </p>
          <img className="rounded-full w-96 h-96 shadow-xl dark:shadow-gray-800" src="/Ash.jpg" alt="picture of Ash, temp placeholder kinda"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;

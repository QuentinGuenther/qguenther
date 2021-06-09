import { GoGrabber } from 'react-icons/go';

const IndexPage = () => (
  <div className="backdrop-filter backdrop-blur-sm bg-hero-pattern bg-cover bg-no-repeat bg-left-top h-96">
    <div className="w-full h-full gradient">
      <div className="grid grid-rows-3 grid-flow-row ">
        <div className="flex justify-between px-6 py-10">
          <h1 className="text-highlight font-bold leading-8 text-5xl">QG</h1>
          <button className="neomorphic w-12 h-12 rounded-full flex justify-center items-center">
            <GoGrabber className="text-white w-8 h-8" />
          </button>
        </div>
        <h1 className="block self-end px-6 text-4xl text-accent-text">
          I build amazing experiences.
        </h1>
        <p className="block self-start px-6 font-bold text-sm text-accent-text-muted">
          Software Engineer from Seattle, WA
        </p>
      </div>
    </div>
  </div>
);

export default IndexPage;

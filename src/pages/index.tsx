import { GoGrabber, GoFileCode, GoLink } from 'react-icons/go';
import { BsChatDots } from 'react-icons/bs';

const IndexPage = () => (
  <div className="green flex flex-col h-screen overflow-hidden overscroll-none">
    <div className="flex-grow backdrop-filter backdrop-blur-sm bg-hero-pattern bg-cover bg-no-repeat bg-left-top h-72">
      <div className="w-full h-full gradient relative">
        <div className="flex justify-between px-6 pt-10 w-full">
          <h1 className="text-logo font-bold leading-8 text-5xl">QG</h1>
          <button className="w-12 h-12 shadow-neomorphic rounded-full flex justify-center items-center">
            <GoGrabber className="text-base w-8 h-8" />
          </button>
        </div>
        <div className="absolute bottom-6">
          <h1 className="block px-6 text-4xl text-accent">
            I build amazing experiences.
          </h1>
          <p className="block px-6 font-bold text-sm text-accent-alt">
            Software Engineer from Seattle, WA
          </p>
        </div>
      </div>
    </div>
    <div className="flex-none bg-primary py-6 space-y-6">
      <div className="flex flex-row justify-between items-center px-6">
        <h1 className="block text-3xl text-accent">Recent Posts</h1>
        <a className=" block text-link text-sm font-bold bullet">Go to Blog</a>
      </div>
      <div className="flex space-x-5 overflow-x-auto overscroll-contain scrollbar-none">
        <div className="ml-6 bg-alt w-64 h-64 px-6 py-4 flex justify-between flex-col flex-none shadow-lg">
          <div>
            <h2 className="text-accent-alt text-2xl">README.md</h2>
            <p className="text-muted text-sm">Jan 1, 1970</p>
          </div>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-alt w-64 h-64 px-6 py-4 flex justify-between flex-col flex-none shadow-lg">
          <div>
            <h2 className="text-accent-alt text-2xl">README.md</h2>
            <p className="text-muted text-sm">Jan 1, 1970</p>
          </div>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-alt w-64 h-64 px-6 py-4 flex justify-between flex-col flex-none shadow-lg">
          <div>
            <h2 className="text-accent-alt text-2xl">README.md</h2>
            <p className="text-muted text-sm">Jan 1, 1970</p>
          </div>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-alt w-64 h-64 px-6 py-4 flex justify-between flex-col flex-none shadow-lg">
          <div>
            <h2 className="text-accent-alt text-2xl">README.md</h2>
            <p className="text-muted text-sm">Jan 1, 1970</p>
          </div>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-3 align-middle justify-items-center justify-center">
        <div className="h-4 w-4 flex-none rounded-full bg-selected shadow-md" />
        <div className="h-4 w-4 flex-none rounded-full bg-unselected shadow-md" />
        <div className="h-4 w-4 flex-none rounded-full bg-unselected shadow-md" />
        <div className="h-4 w-4 flex-none rounded-full bg-unselected shadow-md" />
      </div>
    </div>
    <div className="flex-none bg-alt py-4 flex justify-around">
      <div className="flex flex-col items-center">
        <GoFileCode className="h-6 text-base" />
        <p className="text-base font-bold text-sm">BLOG</p>
      </div>
      <div className="flex flex-col items-center">
        <GoLink className="h-6 text-base" />
        <p className="text-base font-bold text-sm">RESOURCES</p>
      </div>
      <div className="flex flex-col items-center">
        <BsChatDots className="h-6 text-base" />
        <p className="text-base font-bold text-sm">CONTACT</p>
      </div>
    </div>
  </div>
);

export default IndexPage;

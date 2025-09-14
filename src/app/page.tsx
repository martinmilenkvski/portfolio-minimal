import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-grow">
      {/* Top section with social links and heading */}
      <div className="flex-grow flex">
        {/* Social Links Sidebar */}
        <div className="w-1/4 flex flex-col justify-start items-start pt-8">
          <a href="#" className="text-gray-500 hover:text-black">
            Instagram
          </a>
          <a href="#" className="text-gray-500 hover:text-black mt-2">
            LinkedIn
          </a>
          <a href="#" className="text-gray-500 hover:text-black mt-2">
            GitHub
          </a>
        </div>

        {/* Main Heading */}
        <div className="w-3/4 flex justify-center items-center">
          <h1 className="text-5xl font-bold leading-tight text-left">
            I'M MARTIN, AN WEB
            <br />
            DESIGNER AND DEVELOPER
            <br />
            WORKING WITH CLIENTS
            <br />
            FROM AROUND THE WORLD.
          </h1>
        </div>
      </div>

      {/* Bottom section for the hero image */}
      <div className="mt-16">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          {" "}
          {/* 16:9 Aspect Ratio */}
          <Image
            src="/images/kontrans1.jpg" // The path to your image in the public folder
            alt="Projects"
            fill // The 'fill' prop makes the image fill its parent container
            className="object-cover" // Ensures the image covers the area without distortion
          />
        </div>
        <div className="flex justify-between items-center bg-white p-2 border-t">
          <span className="font-bold">Projects</span>
          <span className="text-sm text-gray-500">Web developement</span>
        </div>
      </div>
    </div>
  );
}

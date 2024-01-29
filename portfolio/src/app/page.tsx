import Image from 'next/image';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col justify-center items-center">
        <video
          id="bgVideo"
          preload="true"
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover sm:top-0 left-0 z-[-1]"
        >
          <source src={"Huracan_STO.mp4"} type="video/mp4" />
        </video>
          <h1 className="width-50 py-20">
            Brand I've worked with
          </h1>
        <div>
        
          <Image
            src={"aston-martin-logo.svg"}
            alt="My SVG"
            width={200}
            height={200}
          />
    

        </div>
      </div>
    </main>
  );
}

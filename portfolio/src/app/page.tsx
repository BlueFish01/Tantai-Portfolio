import Nevbar from '@/components/Nevbar'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      
      <video id="bgVideo" preload="true" autoPlay loop muted>
        <source src={"Huracan_STO.mp4"} type='video/mp4'/>
      </video>
    </main>
  )
}

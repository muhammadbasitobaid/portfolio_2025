import ScrollableSection from "src/components/shared/Container/ScrollableSection";
const Container = () => {
  return (
    <div className="w-[60%] m-x-auto h-screen bg-green-300 flex items-start py-10 gap-x-24"><span className="absolute top-0">Container</span>
      <div className="bg-white p-7 rounded-lg sticky top-20">
        Profile Card
      </div>
    <ScrollableSection/>
    </div>

  )
}

export default Container

import ScrollableSection from "src/components/shared/Container/ScrollableSection";
const Container = () => {
  return (
    <div className="w-[60%] m-x-auto flex items-start py-10 gap-x-20 xl:w-[50%]"><span className="absolute top-0">Container</span>
      <div className="bg-white p-7 rounded-lg sticky top-20 w-[30%]">
        Profile Card
      </div>
    <ScrollableSection/>
    </div>

  )
}

export default Container

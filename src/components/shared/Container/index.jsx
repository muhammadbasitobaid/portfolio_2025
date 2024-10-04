import ScrollableSection from "src/components/shared/Container/ScrollableSection";
import Profile from "src/components/Profile";

const Container = () => {
  return (
    <div className="mx-auto flex flex-col gap-10 px-8 max-w-screen-xl sm:px-6 md:px-8 lg:!flex-row lg:px-0 lg:items-start lg:py-0 xl:py-10 xl:gap-x-20">
      {/* Profile Section */}
        <Profile />
      {/* Scrollable Section */}
    <div className="lg:w-11/12">
        <ScrollableSection />
    </div>
    </div>
  );
};

export default Container;

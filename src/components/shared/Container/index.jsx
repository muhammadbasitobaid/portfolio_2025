import ScrollableSection from "src/components/shared/Container/ScrollableSection";
import Profile from "src/components/Profile";

const Container = () => {
  return (
    <div className="mx-auto flex flex-col gap-6 px-4 max-w-screen-lg sm:px-6 md:px-8 lg:!flex-row lg:gap-x-20 lg:items-start lg:py-10">
      {/* Profile Section */}
        <Profile />
      {/* Scrollable Section */}
        <ScrollableSection />
    </div>
  );
};

export default Container;

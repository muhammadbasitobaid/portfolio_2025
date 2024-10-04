import Heading from "src/components/shared/Heading";
import Paragraph from "src/components/shared/Paragraph";
import { stats } from "src/constants";

const Intro = () => {
  return (
    <>
      <Heading
        size="xl"
        fontWeight="bold"
        title="PRODUCT"
        subtitle="DESIGNER"
        className="items-center lg:items-start"
      />
      <Paragraph className="text-white">
        Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
      </Paragraph>

      <div className="flex flex-wrap gap-6 sm:gap-4 lg:gap-2 2xl:gap-4">
        {stats.map(({ key, value }) => (
          <div className="w-[45%] sm:w-[30%]" key={key}>
            <Heading size="md" fontWeight="bold" title={value} subtitle={key} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Intro;

import Heading from "src/components/shared/Heading";
import Paragraph from "src/components/shared/Paragraph";
import  { socialList } from "src/constants"

const Profile = () => {

  return (

    <div className="text-center flex flex-col items-center gap-y-2 bg-white py-6 px-10 rounded-lg mx-2 md:w-1/2 md:mx-auto lg:w-auto lg:sticky lg:top-20 2xl:px-0">
      <img 
        src={'/images/profile.jpg'} 
        alt={'Profile Pic'} 
        className="mb-2 w-[180px] h-[210px] sm:w-[200px] sm:h-[240px] md:w-[240px] md:h-[284px] lg:w-[280px] lg:h-[336px] rounded-lg object-cover" 
      />

      <Heading
        size="md"
        fontWeight="bold"
        title="Hamza Tariq"
        subtitle=""
        variant="light"
      />

      <Paragraph className="!leading-none text-center !text-base 2xl:w-[70%] 2xl:mx-auto ">
        Experienced full stack developer who has built several LLM solutions.
      </Paragraph>

      <nav className="flex justify-center gap-2">
        {socialList.map((item, index) => (
          <a href={item.href} key={index} className="flex items-center" title={item.text}>
            {item.icon}
          </a>
        ))}
      </nav>

      </div>
  )
}

export default Profile

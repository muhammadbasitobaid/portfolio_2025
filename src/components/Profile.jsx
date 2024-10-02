import Heading from "src/components/shared/Heading";
import Paragraph from "src/components/shared/Paragraph";
import  { socialList } from "src/constants"

const Profile = () => {

  return (

    <div className="text-center flex flex-col items-center gap-y-4 bg-white py-6 px-10 rounded-lg sticky top-20 w-[50%]">
      <img 
        src={'/images/profile.jpg'} 
        alt={'Profile Pic'} 
        className="!w-[240px] !h-[284px] rounded-lg object-cover" 
      />

      <Heading
        size="md"
        fontWeight="bold"
        title="Evil Minion"
        subtitle=""
        variant="light"
      />

      <Paragraph className="!leading-none text-center !text-base">
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

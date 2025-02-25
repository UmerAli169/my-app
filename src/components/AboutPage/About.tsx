import AboutSection from "../../views/ui/about/AboutSection";
import aboutData from "../../Data/about/aboutData.json";
import Sidebar from "@/views/ui/about/Sidebar";
import Wrapper from "@/app/wrapper";

export default function AboutPage() {
  return (
    <Wrapper>

    <div className="flex py-[40px] gap-[20px]  flex  lg:flex-row flex-col ">
      <div>
        
        <Sidebar />
        </div>
      <div className="flex-1">
        {aboutData.sections.map((section, index) => (
          <AboutSection key={index} title={section.title} items={section.items} />
        ))}
      </div>
    </div>
        </Wrapper>
  );
}

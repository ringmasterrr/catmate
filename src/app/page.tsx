import Section1 from "./section1";
import Section2 from "./section2";
import MeowComponent from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Section1/>
      <Section2/>
      <MeowComponent/>
      <Section4/>
      <Section5/>
      <Section6/>
    </div>
  );
}

import InfoCard from "@/components/cards/InfoCard";
import SectionHeader from "@/components/sections/SectionHeader"
import { CgProfile, RiStackLine } from "@/lib/utils";
import { MdOutlineRateReview } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";

const AdminDashboard = () => {

  return (
    <section className="space-y-4">
        <SectionHeader 
            subtitle="MOTOX"
            title="Best Car"
            span="Store"
        />
        <div className="flex flex-wrap gap-4">
          <InfoCard 
            Icon={CgProfile}
            label="Users"
            value={23}
            classes="bg-cc-red"
          />
          <InfoCard 
            Icon={RiStackLine}
            label="Products"
            value={23}
            classes="bg-cc-blue"
          />
          <InfoCard 
            Icon={MdOutlineRateReview}
            label="Reviews"
            value={23}
            classes="bg-cc-green"
          />
          <InfoCard 
            Icon={TbSpeakerphone}
            label="Ads"
            value={23}
            classes="bg-cc-yellow"
          />
        </div>
    </section>
  );
}

export default AdminDashboard;
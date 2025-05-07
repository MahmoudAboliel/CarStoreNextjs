import InfoCard from "@/components/cards/InfoCard";
import SectionHeader from "@/components/sections/SectionHeader"
import { CgProfile, RiStackLine } from "@/lib/utils";
import { MdOutlineRateReview } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import { fetchMainInfo } from "@/lib/apiCalls/PublicAPIsCall";

const AdminDashboard = async () => {
  const mainInfo = await fetchMainInfo()
  // console.log(mainInfo)
  return (
    <section className="space-y-4">
        <SectionHeader 
            subtitle="المسؤول"
            title="لوحة التحكم"
            span="الإحصائيات"
        />
        <div className="flex flex-wrap gap-4">
          <InfoCard 
            Icon={CgProfile}
            label="المستخدمين"
            value={mainInfo.users || 0}
            classes="border-cc-red text-cc-red"
          />
          <InfoCard 
            Icon={RiStackLine}
            label="السيارات الموجودة"
            value={mainInfo.existCars || 0}
            classes="border-cc-blue text-cc-blue"
          />
          <InfoCard 
            Icon={RiStackLine}
            label="السيارات المباعة"
            value={mainInfo.soldCars || 0}
            classes="border-cc-blue text-cc-blue"
          />
          <InfoCard 
            Icon={MdOutlineRateReview}
            label="التعليقات المقبولة"
            value={mainInfo.approvedComments || 0}
            classes="border-cc-green text-cc-green"
          />
          <InfoCard 
            Icon={MdOutlineRateReview}
            label="التعليقات قيد الإنتظار"
            value={mainInfo.commentsOnHold || 0}
            classes="border-cc-green text-cc-green"
          />
          <InfoCard 
            Icon={TbSpeakerphone}
            label="الإعلانات"
            value={mainInfo.ads || 0}
            classes="border-cc-yellow text-cc-yellow"
          />
        </div>
    </section>
  );
}

export default AdminDashboard;
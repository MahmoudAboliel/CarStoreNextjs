import EditProfileForm from "@/components/froms/EditProfileForm";
import SectionHeader from "@/components/sections/SectionHeader";

const ProfilePage = () => {
    

  return (
    <section>
      <SectionHeader 
        subtitle="المستخدم"
        title="لوحة التحكم"
        span="الملف الشخصي"
      />
      <EditProfileForm 
        classes=""
      />
    </section>
  );
}

export default ProfilePage;
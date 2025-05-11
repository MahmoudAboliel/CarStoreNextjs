import EditProfileForm from "@/components/froms/EditProfileForm";
import SectionHeader from "@/components/sections/SectionHeader";
import { cookies } from "next/headers";

const ProfilePage = async () => {
    const token = (await cookies()).get('token')?.value || ''

  return (
    <section>
      <SectionHeader 
        subtitle="المستخدم"
        title="لوحة التحكم"
        span="الملف الشخصي"
      />
      <EditProfileForm 
        classes=""
        token={token}
      />
    </section>
  );
}

export default ProfilePage;
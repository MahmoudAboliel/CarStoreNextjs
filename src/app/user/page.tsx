import EditProfileForm from "@/components/froms/EditProfileForm";
import SectionHeader from "@/components/sections/SectionHeader";

const ProfilePage = () => {
    

  return (
    <section>
      <SectionHeader 
        subtitle="Welcome"
        title="Edit Your"
        span="Profile"
      />
      <EditProfileForm 
        classes=""
      />
    </section>
  );
}

export default ProfilePage;
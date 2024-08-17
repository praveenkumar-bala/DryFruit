import { ProfileEditPageView } from "pages-sections/customer-dashboard/profile/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/users";
export const metadata = {
  title: "Profile",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function ProfileEdit() {
  const user = await api.getUser();
  return <ProfileEditPageView user={user} />;
}
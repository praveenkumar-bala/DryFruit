import { ProfilePageView } from "pages-sections/customer-dashboard/profile/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/users";
export const metadata = {
  title: "Profile",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Profile() {
  const user = await api.getUser();
  return <ProfilePageView user={user} />;
}
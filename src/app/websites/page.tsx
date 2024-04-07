import { DashboardNavbar } from "../../components/Navbars";
import WebsiteOverview from "../../components/WebsiteOverview";

export default function Page() {
   return (
      <div>
         <DashboardNavbar />

         {/* Make it so that it wraps around to the beginning of the line when it reaches the end of the line. */}
         <div className="flex flex-wrap justify-center">
            <div className="p-4">
               <WebsiteOverview name="example1" domain="example1.com" />
            </div>
            <div className="p-4">
               <WebsiteOverview name="example2" domain="example2.com" />
            </div>
            <div className="p-4">
               <WebsiteOverview name="example3" domain="example3.com" />
            </div>
            <div className="p-4">
               <WebsiteOverview name="example4" domain="example4.com" />
            </div>
         </div>
      </div>
   );
};

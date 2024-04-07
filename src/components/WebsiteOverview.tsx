import Image from 'next/image';
type WebsiteOverviewProps = {
   name: string;
   domain: string;
}

export default function WebsiteOverview(props: WebsiteOverviewProps) {
   return (
      <div className="relative">

         <div className="absolute inset-0 bg-white opacity-5"></div> {/* Background overlay */}
         <div className="z-10 flex flex-col">
            <div>
               <Image
                  src="/domainImage.jpg"
                  alt="none"
                  width={300}
                  height={300}
               />
            </div>
            <div className="flex flex-col items-center text-white py-3">
               <p>Website Name: {props.name}</p>
               <p>Domain: {props.domain}</p>
            </div>
         </div>

      </div>
   );
};

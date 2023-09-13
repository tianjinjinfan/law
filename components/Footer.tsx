import Link from "next/link";

export default function Footer() {
  return (
   
    
     <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      
      <div>
        玖策AI <a
          href="https://9cece.net/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 hover:underline transition underline-offset-2"
        >
          了解更多
        
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
       <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 hover:underline transition underline-offset-2"
        >
       津ICP备2023005288号-3
	   </a>)
      </div>
    </footer>
  );
}

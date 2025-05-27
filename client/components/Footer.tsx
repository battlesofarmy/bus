
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-10">
        <h2 className={"text-2xl text-center"}>Comming Soon!</h2>
        <div className="text-center">
          <div className="flex justify-center mt-8">
            <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row md:justify-between items-center text-[13px] text-gray-400">
          <p className="order-2 md:order-1 mt-5 md:mt-0">
            &copy; <a target='_blank' href="https://muntasir.vercel.app"> Powered by 💝CSE Depertment </a>
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">  <Link href={'/about'}>About Us</Link> </span>
            <span className="px-2 border-l">  <Link href={'/contact'}>Contact Us</Link> </span>
            <span className="px-2 border-l"> <Link href={'/career'}>Career</Link> </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

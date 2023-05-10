import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 h-60 p-4 pt-5m backdrop-blur-2xl">
      <div className=" container mx-auto">
        <div>
          <h3 className=" w-fit mx-auto text-center text-white font-bold text-xl border-[#59ecd9] border-b-2 pb-2 px-3">
            درباره من
          </h3>
          <h4 className=" text-center text-white mb-8 mt-5">
            این پروژه با نکست ساخته شده
            <br />
            من علی محمودی هستم، شانزده سال دارم و ساکن کرج هستم، من از اوایل سال
            1401 شروع به یادگیری برنامه نویسی در حوزه فرانت اند کردم.
          </h4>
        </div>
        <Link
          href="tel:+989103337253"
          className="flex justify-center gap-4 items-center"
        >
          <Image
            src="/images/icons8-instagram-64.png"
            alt="instagram image"
            width={30}
            height={30}
          />
          <Image
            src="/images/icons8-telegram-app-64.png"
            alt="telegram image"
            width={30}
            height={30}
          />
          <Image
            src="/images/icons8-twitter-48.png"
            alt="twitter image"
            width={30}
            height={30}
          />
          <Image
            src="/images/icons8-whatsapp-50.png"
            alt="whatsApp image"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </footer>
  );
}

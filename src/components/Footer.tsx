import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaTwitter, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const socialsMedia = [
  {
    name: "facebook",
    icon: MdFacebook,
    link: "https://www.facebook.com/",
  },
  {
    name: "twitter",
    icon: FaTwitter,
    link: "https://twitter.com/",
  },
  {
    name: "instagram",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/",
  },
  {
    name: "whatsapp",
    icon: FaWhatsapp,
    lingkan: "https://www.whatsapp.com/",
  },
  {
    name: "messenger",
    icon: FaFacebookMessenger,
    lingkan: "https://www.messenger.com/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-CoolGray  sm:px-9 py-10 ">
      <div className="flex w-fit md:w-full mx-auto md:justify-between flex-col md:flex-row gap-4">
        <div className="w-full sm:max-w-[322px]">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/logo.png"} width={28} height={28} alt="logo" />
            <span className="text-xl font-bold text-PureWhite"> HypeWear</span>
          </Link>
          <p className="text-sm text-white font-normal mt-3">
            Temukan koleksi pilihan yang dirancang untuk meningkatkan penampilan
            Anda. Mulai dari kebutuhan klasik hingga gaya terkini, semuanya ada
            di sini.
          </p>
        </div>
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
          <div className="flex gap-10">
            <div>
              <h4 className="text-white text-base font-semibold">
                Pilihan Menu
              </h4>
              <ul>
                <li>
                  <Link href={"/"} className="text-white text-sm font-normal">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/cart"}
                    className="text-white text-sm font-normal"
                  >
                    Keranjang
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base font-semibold">
                Layanan Customer
              </h4>
              <ul>
                <li>
                  <Link
                    href={"/help"}
                    className="text-white text-sm font-normal"
                  >
                    Help Desk
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/terms"}
                    className="text-white text-sm font-normal"
                  >
                    Term and Condition
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3">
            {socialsMedia.map((item, index) => (
              <a target="_blank" href={item.link} key={index}>
                <item.icon size={36} className="text-PureWhite" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

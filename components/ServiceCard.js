// components/ServiceCard.js
import React from "react";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { name, description, icon, image } = service;

  return (
    <div className="service-card">
      <div className="service-card-img aisc">
        <Image src={`/images/${image}`} alt={name} width={320} height={210} />
      </div>
      <div className="service-card-content plr16 ptb24">
        <h3 className="fs20 fw6 mb16">{name}</h3>
        <p className="fs15 lh24 fc3 mb24">{description}</p>
        <Link href="#" className="fs15 fc1 dif aic bg4 mt16 mb24 cp">
          <span className="v-center">
          Read More
            <MdOutlineArrowRightAlt size={24} className='ml8' />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

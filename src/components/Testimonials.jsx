import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { SectionWrapper } from "../hoc";
import { LuQuote } from "react-icons/lu";
import { testimonials } from "../constants";
import { styles } from "../styles";

const Testimonials = () => {
  return (
    <div className="p-4 font-poppins text-flashWhite  bg-platinum py-10">
      <p className={` font-semibold mb-2 text-night ${styles.heroHeadText}`}>
        Testimontials
      </p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 gap-10">
        {/* {testimonials.map((testimonial,index) => {
            <Card
            title={testimonial.name}
            key={index}
            subtitle={testimonial.testimonial}
            href="#"
            Icon={LuQuote}
          />
        })} */}
        <Card
          title="Julian B."
          subtitle="Their commitment to breaking barriers in the tech industry is truly commendable."
          Icon={LuQuote}
        />
        <Card
          title="Sebastian V."
          subtitle="Their emphasis on diversity goes beyond rhetoric – tangible actions creating equal opportunities. "
          Icon={LuQuote}
        />
        <Card
          title="Attalia M."
          subtitle="Their innovative approach to inclusivity positively influences the tech ecosystem."
          Icon={LuQuote}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-[425px] mx-auto p-4 h-[250px] rounded border-[1px] border-slate-300 relative overflow-hidden group bg-flashWhite"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-night to-jetLight  translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-taupe group-hover:text-flashWhite group-hover:rotate-12 transition-transform duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-taupe relative z-10 duration-300 text-3xl p-5">
        "{subtitle}"
      </p>
    </a>
  );
};

export default Testimonials;

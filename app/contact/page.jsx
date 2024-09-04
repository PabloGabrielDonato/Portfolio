"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "11 3883 6616",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "pablodonatoportfolio@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Dirección",
    description: "Buenos Aires, Argentina",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent ">Trabajemos juntos</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                debitis quam odio porro cumque unde necessitatibus, sapiente
                numquam distinctio
              </p>
              {/*input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Nombre" />
                <Input type="lastname" placeholder="Apellido" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Teléfono" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccioná un servicio." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Seleccioná un servicio.</SelectLabel>
                    <SelectItem value="est">Desarrollo Web</SelectItem>
                    <SelectItem value="cst">Diseño UX/UI</SelectItem>
                    <SelectItem value="mst">Diseño de marca</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Escribi tu mensaje acá"
              />
              <Button className="max-w-40">Enviar</Button>
            </form>
          </div>
          <div className="flex-1 flex tems-center xl:justify-end xl:items-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

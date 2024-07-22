import React from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { PaypalIcon } from "../icons/PaypalIcon";
import { GithubIcon } from "../icons/GithubIcon";

export const UiFooter = () => {
  return (
    <div className="mx-auto px-4 py-8 container">
      <div className="flex lg:flex-row flex-col lg:justify-between items-center lg:items-start space-y-10 lg:space-y-0">
        {/* Información */}
        <div className="flex-1">
          <p className="max-w-96 text-gray-500">
            Olympus Scanlation es un sitio donde leer tus series Coreanas y
            Chinas traducidas al español por muchos grupos que lo conforman.
            Este sitio está protegido por reCAPTCHA. Se aplican la Política de
            privacidad y las Condiciones del servicio de Google.
          </p>
        </div>

        {/* Logo e Información Adicional */}
        <div className="flex lg:flex-row flex-col items-center lg:items-start lg:space-x-6 space-y-6 lg:space-y-0">
          <div className="flex-shrink-0">
            <img
              src="olympus-logo-96.webp"
              alt="Olympus logo"
              className="border-8 border-slate-700 rounded-full w-24 h-24"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-bold text-2xl text-white">
              Olympus Scanlation
            </h1>
            <p className="text-gray-500">
              Coded by{" "}
              <a
                target="BLANK"
                href="https://github.com/odindevv"
                className="font-bold text-lg text-sky-400"
              >
                Odindevv
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-8 h-8">
                <DiscordIcon className="w-full h-full" />
              </a>
              <a href="#" className="w-8 h-8">
                <PaypalIcon className="w-full h-full" />
              </a>
              <a
                href="https://github.com/odindevv"
                className="w-8 h-8"
                target="BLANK"
              >
                <GithubIcon className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

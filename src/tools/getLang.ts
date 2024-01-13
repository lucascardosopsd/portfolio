"use client";

import { useEffect, useState } from "react";

export const getLang = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const lang = navigator.language.split("-")[0];

    if (lang !== "pt" || "en") {
      setLang("en");
    }

    setLang(lang);
  }, []);

  return lang as "pt" | "en";
};

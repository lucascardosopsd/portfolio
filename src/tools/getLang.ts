"use client";

import { useEffect, useState } from "react";

export const getLang = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(navigator.language.split("-")[0]);
  }, []);

  return lang as "pt" | "en";
};

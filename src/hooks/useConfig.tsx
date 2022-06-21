import { useState } from "react";
import { Config } from "../app/types";
import { formatMoney } from "../app/util";


export const useConfig = (): Config => {
  const [langCode, setLangCode] = useState("en-US");
  const [currency, setCurrency] = useState("USD");

  const format = (amount: number) => formatMoney({amount, langCode, currency});

  return { langCode, currency, setLangCode, setCurrency, formatMoney: format }
}
import HomePageUI from "./home.presenter";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [fromCountry, setFromCountry] = useState<string>("KRW");
  // 보내는 화폐 지역
  const [fromMoney, setFromMoney] = useState<number>(1);
  // 보내는 화폐 금액
  const [toMoney, setToMoney] = useState<number>(0);
  // 받는 환율 되는 곳
  const [toCountry, setToCountry] = useState<string>("KRW");
  // 받는 화폐 지역
  const [result, setMyResult] = useState<number>(0);
  // 최종 나오는 금액

  useEffect(() => {
    onChangeResult();
  });
  const onChangeResult = () => {
    const requestURL = `https://api.exchangerate.host/convert?from=${fromCountry}&to=${toCountry}`;
    const request = new XMLHttpRequest();
    request.open("get", requestURL);
    request.send();
    request.responseType = "json";
    request.addEventListener("load", (res: any) => {
      setToMoney(res.target.response.result);
    });
    const changeMoney = Number(toMoney * fromMoney);
    setMyResult(changeMoney);
  };

  const onChangeFromCountry = (from: React.ChangeEvent<HTMLInputElement>) => {
    setFromCountry(from.target.value);
  };

  const onChangeToCountry = (to: React.ChangeEvent<HTMLInputElement>) => {
    setToCountry(to.target.value);
  };

  const onChangeFromMoney = (money: any) => {
    setFromMoney(money.target.value);
  };

  return (
    <HomePageUI
      result={result}
      fromMoney={fromMoney}
      onChangeFromCountry={onChangeFromCountry}
      onChangeToCountry={onChangeToCountry}
      onChangeFromMoney={onChangeFromMoney}
    />
  );
}

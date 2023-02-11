import HomePageUI from "./home.presenter";
import { useEffect, useState, ChangeEvent } from "react";

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
    // 별도 이벤트에서 받아오는 것이 아니라 유즈 이펙트로 계속 렌더링
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
    // 버튼으로 변경할 것이라면 위까지는 계속 렌더링 되도록 따로 변수에 선언하고
    // 클릭 이벤트로는 하단 계산을 하는 것을 받음
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

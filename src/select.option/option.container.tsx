import * as Option from "./option.styles";
interface IOptionPage {
  onChangeCountry?: any;
}

export default function OptionPage(props: IOptionPage) {
  const EXCHANGE_DATA = [
    { country: "KRW", title: "KRW 대한민국" },
    { country: "USD", title: "USD 미국" },
    { country: "JPY", title: "JPY 일본" },
    { country: "CNY", title: "CNY 중국" },
    { country: "HKD", title: "HKD 홍콩" },
    { country: "EUR", title: "EUR 유럽" },
    { country: "AUD", title: "AUD 호주" },
    { country: "TWD", title: "TWD 대만" },
    { country: "THB", title: "THB 태국" },
    { country: "NPR", title: "NPR 네팔" },
    { country: "GBP", title: "GBP 영국" },
    { country: "SGD", title: "SGD 싱가폴" },
    { country: "CAD", title: "CAD 캐나다" },
    { country: "DKK", title: "DKK 덴마크" },
    { country: "NOK", title: "NOK 노르웨이" },
    { country: "NZD", title: "NZD 뉴질랜드" },
    { country: "ZAR", title: "ZAR 나이지리아" },
  ];

  return (
    <Option.Wrapper>
      <Option.Select onChange={props.onChangeCountry}>
        {EXCHANGE_DATA.map(el => (
          <option value={el.country}>{el.title}</option>
        ))}
      </Option.Select>
    </Option.Wrapper>
  );
}

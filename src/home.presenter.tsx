import * as Home from "./home.styles";
import OptionPage from "./select.option/option.container";
interface IHomePageUI {
  fromMoney: number;
  onChangeFromMoney: (from: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeFromCountry: (to: React.ChangeEvent<HTMLInputElement>) => void;
  result: number;
  onChangeToCountry: (money: any) => void;
}
export default function HomePageUI(props: IHomePageUI) {
  return (
    <Home.Wrapper>
      <Home.MainBox>
        <Home.Title>환율 계산기</Home.Title>
        <Home.InsideWrapper>
          <Home.MyInput
            type="number"
            defaultValue={props.fromMoney}
            value={props.fromMoney}
            onChange={props.onChangeFromMoney}
          ></Home.MyInput>
          <OptionPage onChangeCountry={props.onChangeFromCountry} />
        </Home.InsideWrapper>
        <Home.InsideWrapper>
          <Home.MyInput
            type="number"
            value={props.result}
            defaultValue={props.result}
            readOnly
          ></Home.MyInput>
          <OptionPage onChangeCountry={props.onChangeToCountry} />
        </Home.InsideWrapper>
      </Home.MainBox>
    </Home.Wrapper>
  );
}

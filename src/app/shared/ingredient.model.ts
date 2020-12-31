export class Ingredient {
  constructor(public name: string, public amount: number) {}
}
//생성자에 public 변수 형태로 지정하면 입력과 동시에
//해당 변수 이름의 속성값으로 초기화된 객체만들어짐

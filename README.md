# Wanted pre onboarding Assignment

wanted 프리온보딩 선발 과제용 레포지토리입니다.

> 배포 링크 <br /> > https://6268dd22f4c9ef5b87fd49df--gleaming-crumble-17c74a.netlify.app/

# 사용 기술, 프레임워크, 라이브러리

`javascript` `react` `styled-component` `react-icon`

# 실행

```
npm start
```

```
yarn start
```

# 구현 사항

## 1. Toggle ✅

![toggle](https://user-images.githubusercontent.com/71131248/165448574-0d152680-99b2-48e8-87ed-36dde6244435.gif)

### 1) 구현 방법

두 개의 토글 버튼을 만들 후, 슬라이드 해서 보여줄 토글 슬라이드를 position absolute를 해서 위치를 설정해주었습니다. 각 토글이 클릭되었을 때를 true, false의 상태값으로 설정한 후, props로 상태를 전달해 주어 조건부 스타일링과 슬라이더를 움직일 수 있도록 했습니다. 슬라이더에는 transition을 통해 x축으로 이동할 때 애니메이션 효과를 주었습니다.

### 2) 구현하면서 어려웠던 점 / 해결 과정

toggle 기능을 라이브러리를 쓰지 않고 처음 만들어 보았기 떄문에 움직이는 slider를 어떻게 구현해야 할 지에 대해 어려움을 겪었습니다.
slider는 실제로 x축으로 움직이는 애니메이션이기 때문에 버튼과는 완전히 독립적인 태그를 만들고 그 태그에 애니메이션을 주어야 겠다는 것을 꺠달은 뒤 구현을 하게 되었습니다.

---

## 2. Tab ✅

![tab](https://user-images.githubusercontent.com/71131248/165448580-2c8295c5-8cd8-4683-818d-52435374fab5.gif)

### 1) 구현 방법

각 메뉴를 배열로 담아 놓고, map을 통해 렌더링 하고, 밑의 TabBar와 TabBarSlider 두 태그를 만들고 position을 absolute로 하여 슬라이드 애니메이션을 구현하였습니다.

### 2) 구현하면서 어려웠던 점 / 해결 과정

메뉴가 3개가 아닌 그 이상의 추가가 될 수 있는 상황을 위해 확장성을 고려하게 되었습니다. 이 부분에서 어려움을 느꼈습니다. 메뉴에 들어갈 것들을 배열로 넣은 뒤 map을 사용해서 메뉴를 보여주었고, 어떤 메뉴가 클릭되었는지 알고, 그것에 따라 밑의 TabBar를 이동시켜주어야 했기 떄문에 메뉴의 index를 state로 만들었습니다. 메뉴의 index는 메뉴가 클릭이 되면 클릭된 메뉴의 index로 업데이트 됩니다. 따라서 map의 index와 state의 index 값을 같은지 비교하여 선택된 메뉴인지 아닌지 판단한 후, 조건부 스타일링을 해주었습니다. 또 메뉴의 개수를 props로 전달해주어 따라 메뉴와 메뉴의 TabBar width 비율을 설정해주었습니다. 이렇게 되면 메뉴의 개수가 늘어났을 때에 width 비율도 개수에 맞게 부모 태그안에서 비율이 설정이 되게 됩니다. TabBar 슬라이드 애니메이션은 state에 저장된 index에 따라서 x축으로 index \* 100% translate 해주었습니다. 이렇게 되면 클릭한 index만큼 x축으로 이동하게 됩니다.

---

## 3. Slider ✅

![slider](https://user-images.githubusercontent.com/71131248/165448586-2462818e-ccb1-4a69-bf8f-9a126ea14808.gif)

### 1) 구현 방법

퍼센트를 보여주는 state를 만들고 input의 range type을 이용했습니다. 버튼을 드래그할때마다 실시간으로 값이 변해야 하기 때문에 useRef를 이용해 input값을 받아온 후 그 값을 통해 onInput 이벤트로 setState를 해주었습니다. 또 밑의 고정된 퍼센트 값은 버튼을 만들어 클릭할때마다 그 값으로 setState 해주었습니다.

### 2) 구현하면서 어려웠던 점 / 해결 과정

처음에 구현할때 input에 range 타입이 있는지 몰랐습니다. 따라서 slide bar를 직접 구현하려고 했으나 그 과정중 어려움을 겪었고 range 타입이 있는 것을 알게 되었습니다. range 타입의 input의 onInput 이벤트를 통해서 값을 슬라이드 할때마다 inputValue라는 state를 그 값으로 업데이트 해주었고, 그 state값을 위의 박스에 보여주었습니다.

---

## 4. Input ✅

![input](https://user-images.githubusercontent.com/71131248/165448596-25481375-fef1-4b8b-ba15-10ced4f1d134.gif)

### 1) 구현 방법

이메일 input의 validation은 정규표현식을 이용해 구현했습니다. input의 onChange 이벤트를 등록해서 값이 바뀔때마다 그 값을 state에 저장해주었습니다. 또 정규표현식의 조건에 맞게 되면 true, 조건이 아닐 경우 false를 리턴하는 함수를 만들고, 그 함수를 통해 조건부 스타일링을 했습니다. Password 또한 true와 false 두 값을 갖게 되는 state를 만들어서 아이콘을 클릭했을 때 그 값을 반대값으로 바꿔주고 그 state를 통해 아이콘의 모양이나 input의 type을 변경시켜주었습니다. 그리고 input의 onBlur 이벤트를 통해 이메일 input에 값을 넣은 뒤 마우스의 focus가 떠났을때 이벤트를 넣어, 현재 inputValue의 값이 validation에 맞는지를 판단해 input 밑의 경고 문구를 넣었습니다.

## 2) 구현하면서 어려웠던 점 / 해결 과정

경고 문구를 나타내기 위해서 input에서 focus가 떠났을 때 이벤트를 찾는 것이 어려웠던 점이었습니다. 이를 구현하기 위해 찾아보다가 onBlur 라는 이벤트가 있는 것을 알게되어, 이를 사용해보았고 새로운 이벤트를 알게된 좋은 경험이었습니다. 또한 현재 state가 3개가 되는데 state를 최소화해서 구현할 수 없는지에 대해 고민을 해보게 되었습니다.

---

## 5. Dropdown ✅

![dropdown](https://user-images.githubusercontent.com/71131248/165449096-5774b27d-8e19-4ee4-a8a9-2f98a9435657.gif)

### 1) 구현 방법

누르면 Dropdown이 구현되도록 isOpen이라는 state를 만들어서 드롭다운 시킬 박스를 클릭시 해당 목록들이 나오도록 구현했습니다. 해당 목록들중 그 아이템을 클릭하면 박스안에 값이 변하도록 selectedItem이라는 state도 만들어서 클릭한 아이템이 선택되도록 만들었습니다. 또한 Search input을 아이템위에 위치 시킨 후, input의 onChange이벤트를 통해 필터링을 구현했습니다. input의 값을 포함하는 아이템을 보여주도록 보여줄 배열을 state로 만든뒤 onchange이벤트에 해당 조건이 만족되는 item으로 setState 했습니다.

### 2) 구현하면서 어려웠던 점 / 해결 과정

처음 드롭다운 기능을 구현하면서 select 태그와 option 태그를 사용해서 만드려고 했으나 스타일링이나 search 기능까지 구현하기에는 한계가 있다고 생각했습니다. 따라서 해당 태그를 사용하는 것이 아닌 div 태그를 이용해서 만들고 onClick 이벤트와 state를 통해 아이템 리스트 open 시키고 close 하는 기능을 구현했습니다.

# 과제 후기

그동안 라이브러리로 사용했던 여러 기능들을 직접 구현해보면서 어떻게 내부에서 동작하게 되는지 생각해 볼 수 있었습니다. 프로젝트 진행 시 라이브러리에 의존하기 보다는 간단한 기능들이라도 직접 구현해봄으로써 좀 더 구체적으로 코드를 이해함의 중요성을 다시 한번 상기시킨 것 같습니다.

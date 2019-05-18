// Component를 불러오는 방법
import React, { Component } from 'react';
import './App.css';
// 해당 component 폴더에 있는 Customer.js를 불러와야 한다.
import Customer from './components/Customer'

// const는 변수 선언
const customer = {
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
}

class App extends Component {
  render() {
    return (
      // 다음과 같이 호출
      <Customer
        // Props를 이용하여 정보 전달
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;

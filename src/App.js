// Component를 불러오는 방법
import React, { Component } from 'react';
import './App.css';
// 해당 component 폴더에 있는 Customer.js를 불러와야 한다.
import Customer from './components/Customer'

// 여러 사용자 정보를 위해 배열로 선언
const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '노유찬',
  'birthday': '950406',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김쾌남',
  'birthday': '951231',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '김성찬',
  'birthday': '951231',
  'gender': '남자',
  'job': '프로그래머'
}
]

class App extends Component {
  render() {
    return (
      // 1개 이상의 데이터가 추가되면 div로 감싸줘야 함
      <div>
        {
          // map 함수를 이용해서 반복적인 내용을 반복문으로 해결
          customers.map(c => {
            return <Customer
              key={c.id}  // map은 key(props)값으로 각 데이터를 구분
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          })
        }

        {/* 너무 반복적이서 소스가 길어짐
        <Customer
          // Props를 이용하여 정보 전달
          id={customers[0].id}
          image={customers[0].image}
          name={customers[0].name}
          birthday={customers[0].birthday}
          gender={customers[0].gender}
          job={customers[0].job}
        />
        <Customer
          id={customers[1].id}
          image={customers[1].image}
          name={customers[1].name}
          birthday={customers[1].birthday}
          gender={customers[1].gender}
          job={customers[1].job}
        />
        <Customer
          id={customers[2].id}
          image={customers[2].image}
          name={customers[2].name}
          birthday={customers[2].birthday}
          gender={customers[2].gender}
          job={customers[2].job}
        />   */}
      </div>
    );
  }
}

export default App;

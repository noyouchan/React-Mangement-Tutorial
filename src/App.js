import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

// material-ui에서 table library 가져오기
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

// CSS
import { withStyles } from '@material-ui/core/styles';

// 1080px 보다 작아질 때는 가로 스크롤바가 생기도록 만듬
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

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
    const { classes } = this.props;
    return (
      /* 화면 크기에 따라 내용이 유동적으로 조절 */

      // Paper로 감싸서 해당 CSS가 적용되도록 함
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { customers.map(c => { return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

// 적용한 상태로 내보내기
export default withStyles(styles)(App);

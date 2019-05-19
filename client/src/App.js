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

// material-ui에서 circular style 가져오기
import CircularProgress from '@material-ui/core/CircularProgress';

// 1080px 보다 작아질 때는 가로 스크롤바가 생기도록 만듬
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
})

/*

1) constructor()

2) componentWillMount()

3) render()

4) componentDidMount()

props or state => shouldComponentUpdate()

*/

class App extends Component {

  // 고정 데이터는 props, 유동 데이터는 state로 선언
  state ={
    customers: "",
    completed: 0  // 0% 에서 100% 까지 로딩이 되는 것을 보여주기 위한 변수
  }

  // api에 접속하여 데이터 받아오기
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);

    // api로부터 데이터를 받아오면 state에 있는 customers에 저장
    // 오류 발생 시 오류 메시지 출력
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    // 해당 주소에 접속하여 데이터를 가져와 body 변수에 담음
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

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
            {/* // state로부터 데이터를 가져온다.
                // 처음에는 비어있는 state의 customers가 호출되기 때문에 오류가 발생
                // 약간의 시간이 지나면 데이터를 가져오기 때문에 그때 데이터로 갱신을 해주어야 함 */}
            {/* { this.state.customers.map(c => { return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> })} */}
            { this.state.customers ? this.state.customers.map(c => {
               return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> 
              }) : 
            
               <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                  </TableCell>
               </TableRow>
            } 
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

// 적용한 상태로 내보내기
export default withStyles(styles)(App);


import React from 'react';
// material-ui에서 테이블을 사용
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

// Table을 이용해서 간단하게 UI 설정
class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}

export default Customer;
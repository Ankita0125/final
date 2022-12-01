import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['DAYS', 'MON', 'TUES','WED', 'THURS','FRI','SAT','SUN'],
      tableTitle: ['MORNING', 'AFTERNOON', 'EVENING'],
      tableData: [
        ['WET', 'WET', 'WET','WET','WET','WET','WET'],
        ['DRY', 'DRY' ,'DRY','DRY','DRY','DRY','DRY'],
        ['ELECTRONIC', '', '','','ELECTRONIC','',''],
        
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex:2, backgroundColor: '#f6f8fa' },
  row: {  height: 50  },
  text: { textAlign: 'center' }
});

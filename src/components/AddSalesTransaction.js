import React , {Component} from 'react';
import {Text , View , ScrollView } from 'react-native';
import {Table,Row,Rows} from 'react-native-table-component';
import {Left,Right,Icon,Header} from 'native-base'
//import {Calendar} from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';

class AddSalesTransaction extends Component{

    constructor(props){
        super(props);
        this.state = {

            tableHead: ['ID','Marker','Sum','Tax','Sold','Date'],
            tableData: [ ['001','Sale','500','20%','20','15/7/18'],
                         ['002','Sale','800','30%','10','11/7/19']
                       
            ]
        }
        
    }

    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
     
      onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }

    render(){

        const state = this.state

        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        return(
            <View style={styles.container}>
            <Header
                 style={{backgroundColor:'#000'}}>
                <Left>
                   <Icon name="menu"
                          style={{color:'#fff'}}
                                 onPress={()=> this.props.navigation.openDrawer()} />
                  </Left>
                <Right></Right>
                                   
            </Header>
            <ScrollView>
            <View style={{flex:1}}>
            <Text style={styles.titleText}>Sales Transaction</Text>
            <View style={styles.containerTable}>
            <Table borderStyle={{borderWidth:2,borderColor:'#c8e1ff'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
            </View>
            </View>

            <View style={styles.container}>
                <CalendarPicker
                  onDateChange={this.onDateChange}
                    />
            <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>


            {/* 
            <View style={{  flex: 1 }}>
            <Calendar
              // Initially visible month. Default = Date()
              current={'2012-03-01'}
              // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
              minDate={'2012-05-10'}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2012-05-30'}
              // Handler which gets executed on day press. Default = undefined
              onDayPress={day => {
                console.log('selected day', day);
              }}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={'yyyy MM'}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              onMonthChange={month => {
                console.log('month changed', month);
              }}
              // Hide month navigation arrows. Default = false
              hideArrows={true}
              // Do not show days of other months in month page. Default = false
              hideExtraDays={true}
              // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
              // day from another month that is visible in calendar page. Default = false
              disableMonthChange={true}
              // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
              firstDay={1}
            />
            </View>
            */}  
            </ScrollView>
            </View>
        );

    }
}

const styles={

    containerTable:{
        flex:1,
        paddingTop:30,
        padding:25,
        backgroundColor:'#fff'
    },
    head:{
        height:50,
        backgroundColor:'#f1f8ff'
    },
    text:{
        margin:10
    },
    container: {
        flex: 1,
        paddingTop:20
      },
      containerCalendar: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
      },
      titleText:{
        fontSize: 30,
        alignItems: 'center',
        fontWeight:'500' ,
        justifyContent: 'center',
        paddingTop:20,
        paddingLeft:60
      }

};
export default AddSalesTransaction;
import Colors               from '../styles/colors';
import Icon                 from 'react-native-vector-icons/Ionicons';
import NotificationsHolder  from './notifications_holder';
import UpcomingAssemblies   from './upcoming_assemblies';
import MessageList          from '../messages/messages_list';
import MessageBox           from '../messages/message_box';
import {BASE_URL, DEV}      from '../utilities/fixtures';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  NativeModules,
} from 'react-native';

export default class ActivityHolder extends Component{
  render(){
    let {tab,} = this.props;
    let tabContent = tab == 'upcoming' ? <UpcomingAssemblies {...this.props} /> : <NotificationsHolder {...this.props}/>
    return (
      <View style={styles.container}>
        <View style={styles.topTab}>
          <TouchableOpacity
            style={[
              styles.leftSelectTab,
              styles.selectTab,
              this.props.tab == 'upcoming' ? styles.leftActiveTab : styles.leftInactiveTab]
            }
            onPress={this.props.setUpcoming}>
            <Text
              style={this.props.tab == 'upcoming' ? styles.activeTabText : styles.inactiveTabText}>Nearby</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.rightSelectTab,
              styles.selectTab,
              this.props.tab == 'notifications' ? styles.rightActiveTab : styles.rightInactiveTab]}
            onPress={this.props.setNotifications}>
            <Text
              style={this.props.tab == 'notifications' ? styles.activeTabText : styles.inactiveTabText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoIcon}>
            <Icon name="information-circled" color="white" size={30}/>
          </TouchableOpacity>
        </View>
        {tabContent}
      </View>
    )
  }
}

let styles = StyleSheet.create({
  infoIcon: {
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
  },
  topTab: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 25,
    paddingBottom: 10,
    backgroundColor: Colors.brandPrimary,
  },
  selectTab:{
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  leftSelectTab: {
    borderRadius: 4,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginLeft: 5,
    borderRightWidth: 0,
  },
  rightSelectTab: {
    borderRadius: 4,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    marginRight: 5,
  },
  leftActiveTab: {
    backgroundColor: 'white',
  },
  leftInactiveTab: {
    backgroundColor: Colors.brandPrimary,
  },
  rightActiveTab: {
    backgroundColor: 'white',
  },
  rightInactiveTab: {
    backgroundColor: Colors.brandPrimary,
  },
  activeTabText: {
    textAlign: 'center',
    color: Colors.brandPrimary,
  },
  inactiveTabText: {
    textAlign: 'center',
    color: 'white',
  },
});

import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import ProfileItem from '../components/ProfileItem'
import CardItem from '../components/CardItem'

export default function LinksScreen () {
  return (
    <ScrollView style={styles.container}>
      <CardItem
        image='{image}'
        name='{name}'
        description='{description}'
        matches='{match}'
        actions
        onPressLeft={() => this.swiper.swipeLeft()}
        onPressRight={() => this.swiper.swipeRight()}
      />
      <ProfileItem
        matches='{match}'
        name='{name}'
        age='{age}'
        location='{location}'
        info1='{info1}'
        info2='{info2}'
        info3='{info3}'
        info4='{info4}'
      />
    </ScrollView>
  )
}

LinksScreen.navigationOptions = {
  title: 'Links'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#fff'
  }
})

import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ProgressBarAndroid } from 'react-native';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import StoryStatus from './StoryStatus'

const StoryList = () => (
  <Query
    query={gql`
    {
      users {
        userid
        handle
        name
        avatarURL
      }
    }
  `}>
  {({ loading, error, data }) => {
    if (loading) return <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="blue"
          progress={1}
        />
      if (error) return <Text>Something went wrong...</Text>

        return (
          <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
              {data.users.map(user =>
                <StoryStatus key={user.userid} user={user} />)}
            </ScrollView>
          </View>
        )
    }
  }
  </Query>
)

export default StoryList


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingBottom:20,
    borderBottomWidth:0.9,
    borderBottomColor:'rgb(227,225,225)'
  },
});

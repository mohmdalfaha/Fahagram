import * as React from 'react';
import { Text, View, StyleSheet, ScrollView,ProgressBarAndroid } from 'react-native';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Post from './Post'

 const PostList = () => (
  <Query
    query={gql`
    {
      posts {
        postid
        location
        author
        imageURL
        time
        avatarURL
      }
    }
  `}>
  {({ loading, error, data }) => {
    if (loading) return <ProgressBarAndroid color="blue"/>
      if (error) return <Text>Something went wrong...</Text>

        return (
          <View style={styles.container}>
            <ScrollView vertical={true}>
              {data.posts.map(post =>
                <Post key={post.postid} post={post}/>)}
            </ScrollView>
          </View>
        )
    }
  }
  </Query>
)

export default PostList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
});

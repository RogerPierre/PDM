import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';

function Post() {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postIdentity}>
          <View style={styles.postAvatarFrame}>
            <Image
              source={{ uri: "https:///placehold.co/50x50.jpg" }}
              style={styles.postAvatar}
            />
          </View>
          <Text style={styles.postUser}>WaitoCocrt</Text>
          <Text style={styles.verified}>●</Text>
        </View>
        <Text style={styles.more}>⋮</Text>
      </View>
      <Image
        source={{ uri: "https:///placehold.co/400x400.jpg" }}
        style={styles.postImage}
      />
      <View style={styles.postActions}>
        <View style={styles.leftActions}>
          <Text style={styles.actionIcon}>♡</Text>
          <Text style={styles.actionIcon}>◌</Text>
          <Text style={styles.actionIcon}>➤</Text>
        </View>
        <Text style={styles.actionIcon}>▱</Text>
      </View>
      <View style={styles.postDetails}>
        <Text style={styles.likes}>100.20 Theo</Text>
        <Text style={styles.caption}>
          <Text style={styles.postUser}>WhiteCross </Text>
          Drine in to dreniges.
          <Text style={styles.moreText}>  ... more</Text>
        </Text>
        <Text style={styles.comments}>View all 20 comments</Text>
        <View style={styles.commentRow}>
          <Image
            source={{ uri: "https:///placehold.co/50x50.jpg" }}
            style={styles.commentAvatar}
          />
          <Text style={styles.commentPlaceholder}>Add a comment...</Text>
        </View>
        <Text style={styles.postAge}>no memo ago</Text>
      </View>
    </View>
  );
}

function AppBar() {
  return (
    <View style={styles.appBar}>
      <Text style={[styles.appBarIcon, styles.selectedIcon]}>⌂</Text>
      <Text style={styles.appBarIcon}>⌕</Text>
      <Text style={styles.addIcon}>＋</Text>
      <Text style={styles.appBarIcon}>◎</Text>
      <View style={styles.appBarAvatar} />
    </View>
  );
}

export default function App() {
  let txtCount = "Testa".split("")
  const [statusActive,setStatusActive]=useState(true)
  //sub component for status
  const handleADDStatus = (active?: boolean, key?: string) => {
    return (
      <View key={key}>
        <View style={[styles.statusView, { borderWidth: active ? 3 : 0 }]} >
          <Image
            source={{ uri: "https:///placehold.co/100x100.jpg" }}
            style={styles.status}
          />
        </View>
        <Text style={[{ alignSelf: "center", fontWeight: 900, }]}  >nome</Text>
      </View>
    )
  }
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container}>

      //header
      <Text style={styles.text}>IFPIGRAM</Text>
      <View style={styles.icons}>
        <Image style={styles.icon} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTC-54TqXdH4N9jw4JwmTFkueqo9cSj0QTg5US1Nh-A&s=10" }} />
        <Image style={[styles.icon, {}]} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6U88zwsnBeW66QgMWLRHSg36YeNjqKfxblXJjz-dTw&s=10" }} />

      </View>
      //status scrollable
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {txtCount.map((_, index) => handleADDStatus(statusActive, `status-${index}`))}
      </ScrollView>
      //posts list
      <ScrollView>
        <Post />

      </ScrollView>
      <StatusBar hidden={true} />

      </ScrollView>
      <AppBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#fff',
    display: "flex",
    flexDirection: "column",
  },
  text: {
    left: 20,
    top: 20,
    fontFamily: "monospace",
    fontSize: 20,
  },
  icon: {
    marginLeft: 12,
    height: 30,
    width: 30
  },
  icons: {
    alignSelf: "flex-end",
    flexDirection: "row"
  },
  statusView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    width: 75,
    height: 75,
    marginLeft: 12,
  },
  status: {
    borderRadius: 100,
    borderWidth:1,
    width: 60,
    height: 60,
  },
  post: {
    marginTop: 22,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingBottom: 12,
  },
  postHeader: {
    height: 58,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postIdentity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postAvatarFrame: {
    width: 42,
    height: 42,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#111',
    padding: 2,
  },
  postAvatar: {
    width: 34,
    height: 34,
    borderRadius: 18,
  },
  postUser: {
    marginLeft: 9,
    color: '#111',
    fontWeight: '700',
  },
  verified: {
    marginLeft: 6,
    color: '#555',
    fontSize: 10,
  },
  more: {
    color: '#111',
    fontSize: 26,
    lineHeight: 26,
  },
  postImage: {
    width: '100%',
    height: 390,
    backgroundColor: '#e9e9e9',
  },
  postActions: {
    height: 48,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  actionIcon: {
    color: '#111',
    fontSize: 28,
    lineHeight: 30,
  },
  postDetails: {
    paddingHorizontal: 14,
  },
  likes: {
    color: '#111',
    fontWeight: '700',
    marginBottom: 7,
  },
  caption: {
    color: '#111',
    lineHeight: 20,
  },
  moreText: {
    color: '#777',
  },
  comments: {
    color: '#777',
    marginTop: 7,
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
  },
  commentAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  commentPlaceholder: {
    color: '#777',
    marginLeft: 9,
  },
  postAge: {
    color: '#777',
    fontSize: 11,
    marginTop: 9,
  },
  appBar: {
    height: 68,
    borderTopWidth: 1,
    borderTopColor: '#cfcfcf',
    backgroundColor: '#fff',
    paddingHorizontal: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBarIcon: {
    color: '#111',
    fontSize: 31,
    lineHeight: 34,
  },
  selectedIcon: {
    fontWeight: '700',
  },
  addIcon: {
    borderWidth: 1.5,
    borderColor: '#111',
    borderRadius: 8,
    color: '#111',
    fontSize: 26,
    height: 34,
    lineHeight: 30,
    textAlign: 'center',
    width: 37,
  },
  appBarAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#111',
  }

});

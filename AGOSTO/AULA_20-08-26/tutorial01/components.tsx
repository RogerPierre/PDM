import { View,Image,Text,StyleSheet } from "react-native";




export function Post() {
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

export const AppBar=()=> {
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
const styles=StyleSheet.create({

    
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
})
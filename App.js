import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import {BlurView} from '@react-native-community/blur';

const App = () => {

  return (
    <SafeAreaView style={styles.bg}>
    <Image source={require('./assets/background.png')} style={styles.bgImage} />
    <View style={styles.info}>
    <View style={styles.infotop}>
      <View style={styles.topNav}>
        <Image source={require('./assets/profile_pic.png')} style={styles.profile} />
        <View style={styles.portfolio}> 
          <Text style={styles.subhead}>Total Portfolio</Text>
          <Text style={styles.mainhead}>Rp 18.600.000</Text>
        </View>
        <Image source={require('./assets/notif.png')} style={styles.notification} />
      </View>
      <View style={styles.amounts}>
        <LinearGradient
              colors={['rgba(163,164,234,0.14)', 'rgba(149,76,255,0.72)']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              useAngle
              angle={45}
              style={{ width: 120, height: 120, borderRadius: 120, marginRight: -86, marginBottom: 47, zIndex: -3, borderColor: 'rgba(255,255,255, 0.1)', borderWidth: 1 }}
        />
        <View style={styles.stocks}>
          <BlurView
            blurType="light"
            blurAmount={20}
            style={{ width: 170, height: 170, position: 'absolute' }}
          >
          <LinearGradient
              colors={['rgba(206,163,254,0.24)', 'rgba(245,245,254,1)']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              useAngle
              angle={131.26}
              style={{ width: 170, height: 170, borderRadius: 170, position: 'absolute', borderWidth: 2, borderColor: 'rgba(255,255,255,0.4)' }}
            />
            </BlurView>
          <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: '#12131A' }}>Stocks</Text>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('./assets/stocks_icon.png')} style={{ width: 20, height: 22, marginRight: 8 }} />
            <Text style={{ fontSize: 26, fontFamily: 'Gilroy-Bold', color: '#082F57' }}>15M</Text>
          </View>
        </View>
        <View style={styles.crypto}>
          <BlurView
            blurType="light"
            blurAmount={20}
            style={{ width: 148, height: 148, position: 'absolute' }}
          >
          <LinearGradient
              colors={['rgba(240,243,255,1)', 'rgba(179,216,255,0.3)']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              useAngle
              angle={135}
              style={{ width: 148, height: 148, borderRadius: 148, position: 'absolute', borderWidth: 2, borderColor: 'rgba(255,255,255,0.4)' }}
            />
            </BlurView>
          <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Medium', color: '#12131A' }}>Crypto</Text>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('./assets/crypto_icon.png')} style={{ width: 24, height: 24, marginRight: 8 }} />
            <Text style={{ fontSize: 26, fontFamily: 'Gilroy-Bold', color: '#082F57' }}>3,6M</Text>
          </View>
        </View>
        <LinearGradient
              colors={['rgba(10,147,255,1)', 'rgba(27,154,255,0.17)']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              useAngle
              angle={152.25}
              style={{ width: 100, height: 100, borderRadius: 100, marginLeft: -68, marginTop: 57, zIndex: -3, borderColor: 'rgba(255,255,255, 0.1)', borderWidth: 1 }}
            />
      </View>
      <View style={styles.maininfo}>
        <LinearGradient
              colors={['rgba(255,255,255,0.7)', 'rgba(255,255,255,1)']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              useAngle
              angle={180}
              style={{ width: '100%', height: 405, position: 'absolute', borderRadius: 24, }}
        />
        <DropShadow
        style={{
          shadowColor: "#8D8D8D",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.15,
          shadowRadius: 10,
        }}
        >
        <View style={styles.wallet}>
          <BlurView
            blurType="light"
            blurAmount={24}
            style={{ width: 327, height: 118, position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          ></BlurView>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 16, color: '#082F57' }}>Wallet Balance</Text>
            <Text style={{ fontFamily: 'Gilroy-Bold', fontSize: 20, color: '#082F57' }}>Rp100.000</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image source={require('./assets/topup_icon.png')} style={{ width: 28, height: 28 }} />
            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 16, color: '#082F57' }}>Top Up</Text>
            <Image source={require('./assets/scan_icon.png')} style={{ width: 28, height: 28 }} />
            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 16, color: '#082F57' }}>Scan</Text>
            <Image source={require('./assets/transfer_icon.png')} style={{ width: 28, height: 28 }} />
            <Text style={{ fontFamily: 'Gilroy-Medium', fontSize: 16, color: '#082F57' }}>Transfer</Text>
          </View>
        </View>
        </DropShadow>
        <Text style={styles.discover}>Discover</Text>
        <DropShadow
        style={{
          shadowColor: "#8D8D8D",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8,
        }}
        >
        <View style={styles.adbanner}>
          <Image source={require('./assets/rewards_ad.png')} style={styles.ad} />
          <Image source={require('./assets/rewards_ad.png')} style={styles.ad} />
        </View>
        </DropShadow>
      </View>
    </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    info: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      zIndex: 1,
    },
    infotop: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
    },
    topNav: {
      display: 'flex',
      flexDirection: 'row',
      margin: 20,
      justifyContent: 'space-between',
    },
    portfolio: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    subhead: {
      fontSize: 18,
      fontFamily: 'Gilroy-Medium',
      color: '#082F57'
    },
    mainhead: {
      fontSize: 26,
      fontFamily: 'Gilroy-Bold',
      color: '#082F57'
    },
    bg: {
      backgroundColor: 'white',
      display: 'flex',
      flex: 1
    },
    bgImage: {
      width: '100%',
      height: '100%',
      zIndex: -1,
    },
    profile: {
      height: 40,
      width: 40,
    },
    notification: {
      height: 32,
      width: 32,
    },
    stocks: {
      width: 170,
      height: 170,
      borderRadius: 170,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      marginRight: -38
    },
    amounts: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 96,
      marginTop: 28,
      marginHorizontal: 28,
    },
    crypto: {
      height: 148,
      width: 148,
      borderRadius: 148,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    maininfo: {
      height: 405,
      width: '100%',
      borderRadius: 24,
      alignItems: 'center',
    },
    wallet: {
      width: 327,
      height: 118,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: 24,
      marginTop: -60,
      paddingVertical: 20,
      paddingHorizontal: 17,
      borderColor: 'white',
      borderWidth: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden'
    },
    ad: {
      height: 146,
      width: 327,
      marginVertical: 16,
    },
    adbanner: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    discover: {
      fontFamily: 'Gilroy-Bold',
      fontSize: 22,
      color:'#082F57',
      paddingLeft: 24,
      marginTop: 24,
      alignSelf: 'flex-start'
    }
});

export default App;

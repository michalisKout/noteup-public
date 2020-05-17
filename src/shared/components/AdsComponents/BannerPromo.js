import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { View, StyleSheet } from 'react-native';
import firebaseConfig from '../../../../firebase.json';

const adUnitId = __DEV__ ? TestIds.BANNER : firebaseConfig['react-native'].admob_android_app_id;
const styles = StyleSheet.create({
  wrapper: { width: '100%', paddingLeft: '7%', marginBottom: 10 },
});

const BannerPromo = () => {
  return (
    <View style={styles.wrapper}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.LARGE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};

export default BannerPromo;

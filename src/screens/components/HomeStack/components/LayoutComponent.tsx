import {View} from 'react-native';
import React from 'react';
import styles from '../styles/LayoutComponentStyles';

export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <View style={styles.layoutContainer}>{children}</View>;
}

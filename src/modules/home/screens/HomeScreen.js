import React from 'react';
import { StatusBar } from 'react-native';

import styled from 'styled-components/native';

import { Metrics, Colors, Images, Fonts } from '~/themes';

const { iPhoneXHelper, size } = Metrics;
const { black, white, lightGray } = Colors;
const { logo } = Images;
const { typography } = Fonts;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${black};
`;

const SafeArea = styled.SafeAreaView`
  margin-top: ${iPhoneXHelper}px;
  background: ${black};
`;

const FileName = styled.Text.attrs(() => ({
  ellipsizeMode: 'tail',
  numberOfLines: 2,
}))`
  font-weight: bold;
  margin-top: ${size(5)}px;
  color: ${lightGray};
  font-size: ${typography.medium};
  text-align: center;
`;

const WrapperLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${size(20)}px;
`;

const Logo = styled.Image.attrs(() => ({
  resizeMode: 'contain',
  resizeMethod: 'resize',
}))`
  height: ${size(170)}px;
  width: ${size(200)}px;
`;

const Instructions = styled.Text.attrs(() => ({
  ellipsizeMode: 'tail',
  numberOfLines: 2,
}))`
  color: ${lightGray};
  font-size: ${typography.medium}px;
  margin-top: ${size(20)}px;
  text-align: center;
`;

const Welcome = styled.Text.attrs(() => ({
  ellipsizeMode: 'tail',
  numberOfLines: 2,
}))`
  color: ${white};
  font-size: ${typography.h1}px;
  font-weight: bold;
  text-align: center;
`;

const HomeScreen = () => (
  <Container>
    <SafeArea>
      <StatusBar barStyle="light-content" backgroundColor={black} />
      <WrapperLogo>
        <Logo source={logo} />
      </WrapperLogo>
      <Welcome>Welcome to the Nigg</Welcome>
      <Welcome>Template!</Welcome>
      <Instructions>This is your app main screen ;D</Instructions>
      <Instructions>You can edit this screen in this file:</Instructions>
      <FileName>src/modules/home/screens/HomeScreen.js</FileName>
    </SafeArea>
  </Container>
);

export default HomeScreen;

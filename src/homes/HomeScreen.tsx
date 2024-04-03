import React from 'react';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import {fontFamilies} from '../constants/fontFamiles';
import {Text, View} from 'react-native';

import {globalStyles} from '../styles/globalStyles';
import CardComponent from '../components/CardComponent';
import TitleComponent from '../components/TitleComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent text="dada" />
          <TextComponent text="dada" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Jason" />
        <TextComponent
          text="Be Productive today"
          size={20}
          font={fontFamilies.semiBold}
        />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('test')}>
          <TextComponent text="search" />
          <Text>SSSSSSSSS</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 tasks done" />
              <TextComponent text="Tag" />
            </View>
            <View>
              <TextComponent text="circleChar" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;

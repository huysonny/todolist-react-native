import React from 'react';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import {fontFamilies} from '../constants/fontFamiles';
import {View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import CardComponent from '../components/CardComponent';
import TitleComponent from '../components/TitleComponent';
import {Element4, Notification, SearchNormal1} from 'iconsax-react-native';
import {colors} from '../constants/colors';
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponent';
import CircularComponent from '../components/CircularComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <Element4 size={24} color={colors.desc} />
          <Notification size={24} color={colors.desc} />
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
          <TextComponent text="search task" color="#696B6F" />
          <SearchNormal1 size={28} color={colors.desc} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task progress" />
              <TextComponent text="30/40 tasks done" />
              <SpaceComponent height={12} />
              <RowComponent justify="flex-start">
                <TagComponent
                  text="March 22"
                  onPress={() => console.log('sayhi')}
                />
              </RowComponent>
            </View>
            <View>
              <CircularComponent value={80} />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;

import React from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Workout',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View className=" bg-neutral-500 p-5">
    <Text className=" text-sm">{title}</Text>
  </View>
);
const WorkoutList = () => {
  return (
    <SafeAreaView className="flex flex-1">
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default WorkoutList;

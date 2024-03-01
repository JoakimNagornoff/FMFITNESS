import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import AddWorkoutModal from '../../components/Modals/addWorkoutModal';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <SafeAreaView className="flex flex-1">
      <View className="flex-1 items-center justify-center">
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>ADD</Text>
        </TouchableOpacity>
        <AddWorkoutModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Text>Home screen</Text>
        <WorkoutList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

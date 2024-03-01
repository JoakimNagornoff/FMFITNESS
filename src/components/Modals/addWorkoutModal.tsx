import React, {useState} from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import SelectMuscleGroupModal from './selectMuscleGroupModa';

const DATA = [
  {
    id: '1',
    exercies: 'Push',
  },
  {
    id: '2',
    exercies: 'Pull',
  },
  {
    id: '3',
    exercies: 'Legs',
  },
  {
    id: '4',
    exercies: 'Abs',
  },
];

type ItemProps = {exercies: string; id: string};

const Item = ({exercies}: ItemProps) => (
  <View className=" h-20 p-5 text-center justify-center">
    <Text className=" text-sm">{exercies}</Text>
  </View>
);

type AddWorkoutModalProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

const AddWorkoutModal = ({
  modalVisible,
  setModalVisible,
}: AddWorkoutModalProps) => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [showSelectMuschlesGroupModal, setShowSelectMuschlesGroupModal] =
    useState<boolean>(false);

  return (
    <View className="flex-1 justify-center items-center">
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View className="flex flex-row p-5 justify-between bg-slate-500  items-center">
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text> Add workout</Text>
        </View>
        <View className="flex flex-row justify-between p-2 m-2">
          <Text>Target Muschles Group</Text>
          <TouchableOpacity
            onPress={() => setShowSelectMuschlesGroupModal(true)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <View className=" bg-slate-200">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => console.log(item.id)}>
                <Item id={item.id} exercies={item.exercies} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
      <SelectMuscleGroupModal
        showSelectMuschlesGroupModal={showSelectMuschlesGroupModal}
        setShowSelectMuschlesGroupModal={setShowSelectMuschlesGroupModal}
      />
    </View>
  );
};

export default AddWorkoutModal;

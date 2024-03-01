import React, {useState} from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';

type SelectMuscleGroupModalProps = {
  showSelectMuschlesGroupModal: boolean;
  setShowSelectMuschlesGroupModal: (
    showSelectMuschlesGroupModal: boolean,
  ) => void;
};
const SelectMuscleGroupModal = ({
  showSelectMuschlesGroupModal,
  setShowSelectMuschlesGroupModal,
}: SelectMuscleGroupModalProps) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Modal
        visible={showSelectMuschlesGroupModal}
        animationType="slide"
        onRequestClose={() =>
          setShowSelectMuschlesGroupModal(!showSelectMuschlesGroupModal)
        }>
        <View className="flex flex-row justify-between p-2 m-2">
          <Text>Target Muschles Group</Text>
        </View>
      </Modal>
    </View>
  );
};

export default SelectMuscleGroupModal;

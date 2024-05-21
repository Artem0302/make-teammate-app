import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AvatarImg from '../../assets/ava.png';
import {styles} from './profile-modal.styles';

interface IProfileModal {
  closeModal: () => void;
}

export const ProfileModal = ({closeModal}: IProfileModal) => {
  return (
    <View style={styles.modal_content}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.scrollview}>
        <View style={styles.header}>
          <Image style={styles.img} source={AvatarImg} />

          <View style={styles.header_text_wrapper}>
            <Text style={styles.header_text}>Name</Text>
            <Text style={styles.header_text}>Surname</Text>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.info}>Info</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.btn} onPress={closeModal}>
            <Text style={styles.btn_text}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_text}>Send message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

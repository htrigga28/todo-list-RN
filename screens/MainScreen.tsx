import React, { useCallback, useState } from 'react';
import { Fab, Icon, VStack, useColorModeValue } from 'native-base';
import { StyleSheet } from 'react-native';
import shortid from 'shortid';
import { AntDesign } from '@expo/vector-icons';
import TaskList from '../components/TaskList';
import AnimatedColorBox from '../components/AnimatedColorBox';
import Masthead from '../components/MastHead';
import NavBar from '../components/NavBarButton';

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Buy movie tickets for Friday',
    done: false,
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native tutorial',
    done: false,
  },
];

const MainScreen = () => {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const handleToggleTaskItem = useCallback((item: any) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done,
      };
      return newData;
    });
  }, []);
  const handleChangeTaskItemSubject = useCallback(
    (item: any, newSubject: any) => {
      setData((prevData) => {
        const newData = [...prevData];
        const index = prevData.indexOf(item);
        newData[index] = {
          ...item,
          subject: newSubject,
        };
        return newData;
      });
    },
    []
  );
  const handleFinishEditingTaskItem = useCallback((_item: any) => {
    setEditingItemId(null);
  }, []);
  const handlePressTaskItemLabel = useCallback((item: any) => {
    setEditingItemId(item.id);
  }, []);
  const handleRemoveItem = useCallback((item: any) => {
    setData((prevData) => {
      const newData = prevData.filter((i) => i !== item);
      return newData;
    });
  }, []);

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w='full'
    >
      <Masthead
        title='How far, Egbon!'
        image={require('../assets/masthead.png')}
      >
        <NavBar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt='-20px'
        borderTopLeftRadius='20px'
        borderTopRightRadius='20px'
        pt='20px'
        alignItems={'center'}
        justifyContent={'center'}
      >
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>

      <Fab
        position='absolute'
        renderInPortal={false}
        size='sm'
        icon={<Icon color='white' as={<AntDesign name='plus' />} size='sm' />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate();
          setData([
            {
              id,
              subject: '',
              done: false,
            },
            ...data,
          ]);
          setEditingItemId(id);
        }}
      />
    </AnimatedColorBox>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});

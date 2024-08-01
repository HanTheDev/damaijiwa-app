import RNPickerSelect from 'react-native-picker-select';

export const Dropdown = () => {
  return (
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        { label: 'Pria', value: 'pria' },
        { label: 'Wanita', value: 'wanita' },
      ]}
    />
  );
};

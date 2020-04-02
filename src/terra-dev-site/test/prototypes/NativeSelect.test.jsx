import React from 'react';
import NativeSelect from '../../../filter/NativeSelect';

/* eslint-disable react/forbid-dom-props */
const NativeSelectTest = () => (
  <div
    style={{
      width: '300px',
      padding: '20px',
      position: 'relative',
    }}
  >
    <p>Default Example</p>
    <NativeSelect
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
    />
    <br />
    <p>Long Option Text Example</p>
    <NativeSelect
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes is a brand of vehicle. You should pick this car. This car drives. It has no seat belts, and no air bags.' },
        { value: 'audi', display: 'Audi' },
      ]}
    />
    <p>Placeholder</p>
    <NativeSelect
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes is a brand of vehicle. You should pick this car. This car drives. It has no seat belts, and no air bags.' },
        { value: 'audi', display: 'Audi' },
      ]}
      placeholder={{}}
    />
    <p>Allow Clear</p>
    <NativeSelect
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes is a brand of vehicle. You should pick this car. This car drives. It has no seat belts, and no air bags.' },
        { value: 'audi', display: 'Audi' },
      ]}
      placeholder={{ allowClear: true }}
    />
    <p>Invalid</p>
    <NativeSelect
      invalid
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
    />
    <p>Disabled</p>
    <NativeSelect
      disabled
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
    />
    <p>OptGroup</p>
    <NativeSelect
      options={[
        {
          display: 'Swedish Cars',
          childOptions: [
            { value: 'volvo', display: 'Volvo' },
            { value: 'saab', display: 'Saab' },
          ],
        },
        {
          display: 'German Cars',
          childOptions: [
            { value: 'mercedes', display: 'Mercedes' },
            { value: 'audi', display: 'Audi' },
          ],
        },
      ]}
    />
    <p>Required/Incomplete?</p>
    <NativeSelect
      required
      isIncomplete
      options={[
        { value: 'volvo', display: 'Volvo' },
        { value: 'saab', display: 'Saab' },
        { value: 'mercedes', display: 'Mercedes' },
        { value: 'audi', display: 'Audi' },
      ]}
      placeholder={{}}
    />
  </div>
);

export default NativeSelectTest;

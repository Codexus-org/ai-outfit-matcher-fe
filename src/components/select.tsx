import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const selectStyle = tv({
  slots: {
    trigger: 'border p-2 rounded-lg shadow-sm w-full flex justify-between focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500',
    content:
      'overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]',
    selectItem: 'p-2 hover:outline-none hover:bg-primary-500 hover:text-white',
  },
});

interface SelectProps extends React.ComponentPropsWithRef<'select'> {
  caption: string;
  options: Record<string, string>[];
}

export const Select = ( props: SelectProps) => {
  const { caption, options,  } = props;
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className={twMerge((selectStyle.slots.trigger), props.className)}>
        <RadixSelect.Value placeholder={caption} />
        <RadixSelect.Icon className="text-primary-500">
          <ChevronDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={selectStyle.slots.content}>
          <RadixSelect.Viewport>
            {options.map(({ value, label }) => {
              return (
                <RadixSelect.Item value={value} className={selectStyle.slots.selectItem}>
                  <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              );
            })}
          </RadixSelect.Viewport>
          <RadixSelect.Arrow />
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};
import _ from 'lodash';

type Map = {
    key: string;
    value: string[];
};

export const SizeSetting: Map[] = [
    { key: 'small', value: ['text-base', 'md:text-lg', 'lg:text-xl'] },
    { key: 'medium', value: ['text-lg', 'md:text-xl', 'lg:text-2xl'] },
    { key: 'large', value: ['text-2xl', 'md:text-3xl', 'lg:text-4xl'] },
    { key: 'extra-large', value: ['text-3xl', 'md:text-4xl', 'lg:text-5xl'] },
];

export function getSize(sizeKey: string): string {
    const sizeMap = SizeSetting.find((map) => map.key === sizeKey);

    if (!sizeMap) {
        console.error(`Size "${sizeKey}" not found in SizeSetting`);
        return '';
    }
    const classes = sizeMap.value;
    return classes.join(' ');
}

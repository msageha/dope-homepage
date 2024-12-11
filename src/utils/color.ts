type Map = {
    key: string;
    value: string[];
    hover: string[];
    active: string[];
};

export const ColorSetting: Map[] = [
    {
        key: 'default',
        value: ['text-gray-700'],
        hover: ['hover:text-gray-700'],
        active: ['active:text-gray-900'],
    },
    {
        key: 'primary',
        value: ['text-gray-700'],
        hover: ['hover:text-indigo-500'],
        active: ['active:text-indigo-700'],
    },
    {
        key: 'secondary',
        value: ['text-white'],
        hover: ['hover:text-green-600'],
        active: ['active:text-green-700'],
    },
];

export function getColor(
    colorKey: string,
    hover?: boolean,
    active?: boolean,
): string {
    const colorMap = ColorSetting.find((map) => map.key === colorKey);
    if (!colorMap) {
        console.error(`Color "${colorKey}" not found in ColorSetting`);
        return '';
    }

    const classes = [...colorMap.value];
    if (hover) {
        classes.push(...colorMap.hover);
    }
    if (active) {
        classes.push(...colorMap.active);
    }
    return classes.join(' ');
}

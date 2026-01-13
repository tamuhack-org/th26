export const enum Category {
    SOFTWARE = 'software',
    HARDWARE = 'hardware',
}

export type PrizeTuple = [string, number | string];

export type PrizeAssetKey =
    | 'macbook'
    | 'ipad'
    | 'keyboard'
    | 'scooter'
    | 'printer'
    | 'headphones';

export interface Prize {
    placement?: string;
    track: string;
    prizes: PrizeTuple[];
    description: string;
    type: Category;
    assetKey?: PrizeAssetKey;
}

export const prizeslist: Record<string, Prize> = {
    'first-place-software': {
        placement: 'first',
        track: 'software',
        prizes: [['Macbook Air M2', 799.0]],
        description: 'First place software track.',
        type: Category.SOFTWARE,
        assetKey: 'macbook',
    },
    'second-place-software': {
        placement: 'second',
        track: 'software',
        prizes: [['iPad A16', 350.0]],
        description: 'Second place software track.',
        type: Category.SOFTWARE,
        assetKey: 'ipad',
    },
    'third-place-software': {
        placement: 'third',
        track: 'software',
        prizes: [['SteelSeries Gaming Keyboard', 219.99]],
        description: 'Third place software track.',
        type: Category.SOFTWARE,
        assetKey: 'keyboard',
    },
    'best-design': {
        track: 'best design',
        prizes: [['Polaroid Now 3rd Gen', 129.99]],
        description:
            'In the world of hacking and engineering, a product must not only work well, but also provide the best user experience possible. Best hack that demonstrates clear design and usability intentions.',
        type: Category.SOFTWARE,
    },
    'best-beginner-software': {
        track: 'best beginner software hack',
        prizes: [['40" Smart TV', 149.99]],
        description:
            'Best software hack created by first-time hackers. To qualify, teams must be at least 50% composed of first-timers at a hackathon.',
        type: Category.SOFTWARE,
    },
    'first-place-hardware': {
        placement: 'first',
        track: 'hardware',
        prizes: [['Gotrax Electric Scooter', 299.0]],
        description: 'First place hardware track.',
        type: Category.HARDWARE,
        assetKey: 'scooter',
    },
    'second-place-hardware': {
        placement: 'second',
        track: 'hardware',
        prizes: [['Neptune 3 Pro 3D Printer', 213.0]],
        description: 'Second place hardware track.',
        type: Category.HARDWARE,
        assetKey: 'printer',
    },
    'third-place-hardware': {
        placement: 'third',
        track: 'hardware',
        prizes: [['Sony WH-CH720N', 179.99]],
        description: 'Third place hardware track.',
        type: Category.HARDWARE,
        assetKey: 'headphones',
    },
    iot: {
        track: 'IoT Challenge',
        prizes: [
            ['Soldering Kit', 39.99],
            ['Compact digital multimeter', 42.99],
        ],
        description:
            'The Best IoT Device Hack challenges participants to innovate within the Internet of Things (IoT) space. Whether designing a new connected device or modifying an existing one, the goal is to enhance everyday experiences or solve pressing challenges through smarter interconnected systems. Projects can span industries from home automation to industrial monitoring, allowing great creativity and flexibility!',
        type: Category.HARDWARE,
    },
    'medical-device': {
        track: 'medical device challenge',
        prizes: [['Marshall Speaker', 179.99]],
        description:
            'The Best Medical Device Hack is an open-ended challenge aimed at improving or revolutionizing the medical and healthcare fields. Participants can design a new device or enhance an existing one to address real-world medical needs, from patient care to diagnostics. Creativity an impact on the healthcare industry are key.',
        type: Category.HARDWARE,
    },
    'best-beginner-hardware': {
        track: 'best beginner hardware hack',
        prizes: [['Arduino Starter Kit R4', 95.0]],
        description:
            'Best hardware hack created by first-time hackers. To qualify, teams must be at least 50% composed of first-timers at a hackathon.',
        type: Category.HARDWARE,
    },
    // 'american-airlines': {
    //     track: 'american airlines challenge',
    //     prizes: [
    //         ['AAdvantage 75k miles', '1st'],
    //         ['AAdvantage 50k miles', '2nd'],
    //         ['AAdvantage 25k miles', '3rd'],
    //     ],
    //     description:
    //         'Create a solution for the airline industry, be it passenger experience, employee experience, or operational efficiencies.',
    //     type: Category.SOFTWARE,
    // },
};

export enum Category {
    SOFTWARE = 'software',
    HARDWARE = 'hardware',
}

export type PrizeTuple = [string, number | string]; // [prize name, prize price or placement to receive prize]

export interface Prize {
    placement?: string;
    track: string;
    prizes: PrizeTuple[];
    description: string;
    type: Category;
}

export const prizeslist: Record<string, Prize> = {
    'first-place-software': {
        placement: 'first',
        track: 'software',
        prizes: [['Macbook Air M2', 9.99]],
        description: 'First place software track.',
        type: Category.SOFTWARE,
    },
    'second-place-software': {
        placement: 'second',
        track: 'software',
        prizes: [['iPad A16', 9.99]],
        description: 'Second place software track.',
        type: Category.SOFTWARE,
    },
    'third-place-software': {
        placement: 'third',
        track: 'software',
        prizes: [['SteelSeries Gaming Keyboard', 9.99]],
        description: 'Third place software track.',
        type: Category.SOFTWARE,
    },
    'best-design': {
        track: 'best design',
        prizes: [['Polaroid Now 3rd Gen', 9.99]],
        description:
            'In the world of hacking and engineering, a product must not only work well, but also provide the best user experience possible. Best hack that demonstrates clear design and usability intentions.',
        type: Category.SOFTWARE,
    },
    'best-beginner-software': {
        track: 'best beginner software hack',
        prizes: [['40" Smart TV', 9.99]],
        description:
            'Best software hack created by first-time hackers. To qualify, teams must be at least 50% composed of first-timers at a hackathon.',
        type: Category.SOFTWARE,
    },
    'first-place-hardware': {
        placement: 'first',
        track: 'hardware',
        prizes: [['Gotrax Electric Scooter', 9.99]],
        description: 'First place hardware track.',
        type: Category.HARDWARE,
    },
    'second-place-hardware': {
        placement: 'second',
        track: 'hardware',
        prizes: [['Neptune 3 Pro 3D Printer', 9.99]],
        description: 'Second place hardware track.',
        type: Category.HARDWARE,
    },
    'third-place-hardware': {
        placement: 'third',
        track: 'hardware',
        prizes: [['Sony WH-CH720N', 9.99]],
        description: 'Third place hardware track.',
        type: Category.HARDWARE,
    },
    iot: {
        track: 'IoT Challenge',
        prizes: [['Soldering Kit and Digital Multimeter', 9.99]],
        description: 'IoT challenge track.',
        type: Category.HARDWARE,
    },
    'medical-device': {
        track: 'medical device challenge',
        prizes: [['Marshall Speaker', 9.99]],
        description: 'Medical device challenge track.',
        type: Category.HARDWARE,
    },
    'best-beginner-hardware': {
        track: 'best beginner hardware hack',
        prizes: [['Arduino Starter Kit R4', 9.99]],
        description:
            'Best hardware hack created by first-time hackers. To qualify, teams must be at least 50% composed of first-timers at a hackathon.',
        type: Category.HARDWARE,
    },
    'american-airlines': {
        track: 'american airlines challenge',
        prizes: [
            ['AAdvantage 75k miles', '1st'],
            ['AAdvantage 50k miles', '2nd'],
            ['AAdvantage 25k miles', '3rd'],
        ],
        description:
            'Create a solution for the airline industry, be it passenger experience, employee experience, or operational efficiencies.',
        type: Category.SOFTWARE,
    },
};

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
    'american-airlines': {
        track: 'american airlines challenge',
        prizes: [
            ['AAdvantage 75k miles', '1st'],
            ['AAdvantage 50k miles', '2nd'],
            ['AAdvantage 25k miles', '3rd'],
        ],
        description:
            'Create a unique hack for the airline that improves the passenger experience, employee experience, or operational efficiencies.',
        type: Category.SOFTWARE,
    },
    northmark: {
        track: 'NorthMark Compute & Cloud challenge',
        prizes: [
            ['PS5', '1st'],
            ['Meta Glasses (Gen 2)', '2nd'],
            ['JBL Speakers', '3rd'],
        ],
        description:
            'High-performance computing makes it possible to process massive data, run complex simulations, or evaluate thousands of scenarios. Most people who need these results are not computing experts. \n\nYour challenge is to design and prototype an application where a non-expert can submit a compute job to an HPC cluster (or simulated cluster) without having to understand how the underlying HPC works. \n\nYou do not need HPC knowledge. You may simulate or simplify the computation. What matters is how inputs are structured, how large-scale processing is abstracted, and how results are presented so a non-expert can make decisions or gain insight. \n\nIn your submission, show us not only what you built, but how you built it, including any creative use of generative or agentic AI to design, automate, or explain your system.',
        type: Category.SOFTWARE,
    },
    usaa: {
        track: 'USAA challenge',
        prizes: [['Samsung Galaxy Buds', '249.99']],
        description:
            'As it pertains to financial services, utilize a Generative AI (or any other model of your choosing) and transform the output you receive in a novel and interesting way prior to returning it to the end user.',
        type: Category.SOFTWARE,
    },
    'capital-one': {
        track: 'Capital One challenge',
        prizes: [['Giftogram', '300.00']],
        description:
            "Our track is The Best Financial Hack! This is your chance to change the game in fintech. Whether it's an innovative payment solution, helping consumers shop smarter, making financing more accessible, or a creative way to improve financial literacy, we want to see your boldest ideas in action. The track is intentionally vague to let you bring your own creativity to it!\n\n You can optionally take advantage of Capital One’s Hackathon API, Nessie (api.nessieisreal.com). It provides mock banking/transaction data to help spearhead your idea.",
        type: Category.SOFTWARE,
    },
    toyota: {
        track: 'Toyota Challenge',
        prizes: [
            ['$500 Amazon Gift Card (one per team)', '1st'],
            ['$350 Amazon Gift Card (one per team)', '2nd'],
            ['$150 Amazon Gift Card (one per team)', '3rd'],
        ],
        description:
            'Create an e-commerce recommendation engine for a caravan marketplace that ensures every search returns meaningful results, even when inventory is limited or constraints are strict.\n\n- Query Expansion & Fallback Recommendations\n- Inventory-Aware Semantic Search\n- Zero-Match Scenarios\n- Personalization\n- Comparable & Substitute Models\n- Budget & Location Awareness\n\nDeliverable:\nA prototype recommendation engine that combines semantic search, personalization, constraint relaxation, and inventory-aware logic to maximize user satisfaction.',
        type: Category.SOFTWARE,
    },
    msy: {
        track: 'Mai Shan Yun Challenge',
        prizes: [['Mai Shan Yun Gift Card', '75.00']],
        description:
            'Develop an inventory and operations management system for Mai Shan Yun that supports core restaurant functions such as taking and modifying customer orders, configuring table layouts, sending order updates to kitchen printers, and adding or removing menu items. Winning teams may have the opportunity to continue working with the restaurant to refine and deploy their solution in a live environment.',
        type: Category.SOFTWARE,
    },
    figma: {
        track: 'Figma Challenge',
        prizes: [['Bag of Figma Merch', '40.00']],
        description:
            '"Best Use of Figma" would go to the team who most creatively uses Figma in their hackathon process. This could be using the design software to wireframe or prototype an initial or final concept. To be considered, attach a shared link to the Figma design that can be accessed by anyone and a screen recording (in case there are sharing issues and we cannot access your work). Members of the Figma Education team will review all submissions, and all will be sent to Figma HQ!! Please direct any questions to a Figma Campus Leader!',
        type: Category.SOFTWARE,
    },
};

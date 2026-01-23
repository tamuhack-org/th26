export type ResourceTuple = [string, string]; // {resource, link}

export const resources: Record<string, ResourceTuple[]> = {
    'getting-started': [
        // ['Software Starter Gudie', 'https://google.com'],
        [
            'Hardware Track Info',
            'https://docs.google.com/document/d/1-SP3KaR3kXw6EjFqxGQP-QmemkR21oky-p1kmmRnQI8/edit?usp=sharing',
        ],
        [
            'Code of Conduct',
            'https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
        ],
        ['Misconduct Reporting', 'https://tamuhack.org/misconduct'],
    ],
    platforms: [
        ['Devpost', 'https://th26.devpost.com/'],
        ['Discord', 'https://tamuhack.org/discord'],
        ['HelpR', 'https://tamuhack.org/helpr'],
    ],
    workshops: [
        [
            'Intro to Git',
            'https://docs.google.com/presentation/d/17tD4eOPL54v6YPEZE57gkOrtEo9LA_r4U0bAOBRGRSo/edit?usp=sharing',
        ],
        [
            'Intro to Web Dev',
            'https://docs.google.com/presentation/d/16moIOAhsbH5qlyeWv0xfH73XT_hk0TJ-b6xct3njT5U/edit?usp=sharing',
        ],
        [
            'Intro to Hardware',
            'https://docs.google.com/presentation/d/1PGyzuwHUsFabeBiMDdyGySel6rtKnuKERMko81i1Lb0/edit?usp=sharing',
        ],
        [
            'Intro to Hackathons',
            'https://docs.google.com/presentation/d/1r142lnKlA043jyYcFnjSFebxcm52usJ9MIVpLyUWQI4/edit?usp=sharing',
        ],
    ],
};

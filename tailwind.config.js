const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
};

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: withOpacity('--color-background-primary'),
        alt: withOpacity('--color-background-alt'),
        selected: withOpacity('--color-background-selected'),
        unselected: withOpacity('--color-background-unselected'),
      },
      backgroundImage: () => ({
        'hero-pattern': "url('../../public/images/hero.jpg')",
      }),
      boxShadow: {
        neomorphic:
          '4px 4px 4px rgba(0, 0, 0, 0.25), -2px -2px 4px rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      textColor: {
        logo: withOpacity('--color-text-logo'),
        accent: withOpacity('--color-text-accent'),
        'accent-alt': withOpacity('--color-text-accent-alt'),
        base: withOpacity('--color-text-base'),
        muted: withOpacity('--color-text-muted'),
        link: withOpacity('--color-text-link'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

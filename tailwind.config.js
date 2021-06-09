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
      backgroundImage: () => ({
        'hero-pattern': "url('../../public/images/hero.jpg')",
      }),
      colors: {
        highlight: withOpacity('--color-highlight'),
        'background-primary': withOpacity('--color-background-primary'),
        'accent-text': withOpacity('--color-accent-text'),
        'accent-text-muted': withOpacity('--color-accent-text-muted'),
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

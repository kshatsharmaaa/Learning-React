# Lecture 10 - Tailwind CSS

## ways to implement css

- index.css file
- sass & scss (writing css with some super powers) - this is not a recommended way to write css when the app scales.
- styled components (styled-components.com)
- libraries & frameworks
    - material ui
    - bootstrap
    - chakra ui
    - ant design
- tailwind css (this is what we'll be doing)
    - go to the website and choose parcel in the framwrorks and follow the steps
    - npm install tailwindcss @tailwindcss/postcss
    - postcss is a tool for transforming css with js
    - create a .postcssrc file and paste
    - create a index.css in src folder and add @import "tailwindcss";
    - and we'll write nothing inside our index.css file
    - install tailwind vs code extension
    - advantage: light weight
    - disadvantage: readdability less
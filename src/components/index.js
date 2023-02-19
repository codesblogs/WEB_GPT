// we usually use building this index.js to just export the whole components easily
//  export( default as .jsx file) from './address';
export { default as Article } from './article/Article';
export {default as Brand } from './brand/Brand';
export { default as Cta } from './cta/Cta';
export {default as Feature } from './feature/Feature';
export { default as Navbar } from './navbar/Navbar';

// after exporting from here we can import these by just this: 
// enter to import ->  'import {.jsx filename} from './components'; 
//This error occurs because TypeScript cannot recognize static assets like SVG files
declare module '*.svg' {
    const content: string;
    export default content;
  }

  declare module 'web-vitals';

  
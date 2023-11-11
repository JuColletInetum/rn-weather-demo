declare module '*.png' {
  const content: PngImage;
  export default content;
}

declare module '*.svg' {
  const content: React.StatelessComponent<SvgProps>;
  export default content;
}

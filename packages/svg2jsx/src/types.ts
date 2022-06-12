export type OptionsType = {
  /**
   * The type of the result component.
   * @defaultValue 'functional'
   */
  type?: 'functional' | 'class';
  /**
   * The language of the result component.
   * @defaultValue 'jsx'
   */
  lang?: 'jsx' | 'tsx';
  /**
   * The name of the result component.
   * @defaultValue Icon
   */
  name?: string;
  /**
   * Do you need to remove the id?
   * @defaultValue true
   */
  cleanupIDs?: boolean;
  /**
   * Either double or single quotes in the result compoent.
   * @defaultValue true
   */
  singleQuote?: boolean;
  /**
   * Do you need to use React.memo for the result component?
   * @defaultValue false
   */
  memo?: boolean;
};

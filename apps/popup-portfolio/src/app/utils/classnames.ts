const classnames = (...args: (string | Record<string, boolean>)[]): string =>
  args
    .flatMap((arg) => {
      if (typeof arg === 'string') {
        return arg; // Add plain strings
      } else if (typeof arg === 'object' && arg !== null) {
        // Add key name string when the value is `true`
        return Object.entries(arg)
          .filter(([, value]) => value)
          .map(([key]) => key);
      }
      return [];
    })
    .join(' ');

export default classnames;

import { macroCondition, getOwnConfig } from '@embroider/macros';

export default function arg(target, key, descriptor) {
  return {
    get() {
      if (macroCondition(getOwnConfig().useDefaultValueIfUndefined)) {
        const argValue = this.args[key];
        return argValue !== undefined
          ? argValue
          : descriptor.initializer
          ? descriptor.initializer.call(this)
          : undefined;
      } else {
        return Object.keys(this.args).includes(key)
          ? this.args[key]
          : descriptor.initializer
          ? descriptor.initializer.call(this)
          : undefined;
      }
    },
  };
}

// toaster.ts
import { Position, Toaster, Intent } from "@blueprintjs/core";

const toaster = Toaster.create({
  position: Position.TOP
});

export const AlertToaster = {
  show({ message }) {
    toaster.show({ message, iconName: "warning-sign", intent: Intent.DANGER });
  }
};
